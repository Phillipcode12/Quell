# Stops the dev server and shuts PostgreSQL down cleanly.
#
#   powershell -ExecutionPolicy Bypass -File scripts\stop-local.ps1
#
# Run this before powering the machine off. A hard kill leaves Postgres to do
# crash recovery on the next start; it almost always recovers from the WAL, but
# a clean stop skips the risk.

param(
    # The dev server's port. Everything this script kills is found through it.
    [int]$Port = 3000
)

$PG   = 'C:\Users\phill\AppData\Local\QuellPostgres'
$DATA = Join-Path $PG 'data'

# --- dev server -------------------------------------------------------------
#
# This used to be `Get-Process node | Stop-Process -Force`, which killed every
# Node process on the machine -- any other project's dev server, any editor
# language server, anything else running on Node -- not just this one.
#
# The dev server is identified by the port it is listening on instead. From
# that one PID the process tree is walked in both directions, because
# `npm run dev` leaves several processes and only the innermost one holds the
# socket:
#
#     powershell -> npm (node) -> next dev (node) -> [turbopack workers]
#                                 ^ the listener
#
# Upwards only while the parent is itself Node, so `npm` is included but the
# walk stops at powershell.exe -- the shell running this script can never
# become a target. Downwards to catch workers that would otherwise be orphaned.

# Note: not named $pid. That is a read-only automatic variable in PowerShell
# holding the current process id, and binding it as a parameter is an error.
function Get-Descendants([int]$ParentId, $Processes) {
    foreach ($child in ($Processes | Where-Object { $_.ParentProcessId -eq $ParentId })) {
        $child.ProcessId
        Get-Descendants $child.ProcessId $Processes
    }
}

function Get-Depth([int]$ProcessId, $Processes) {
    $depth = 0
    $current = $Processes | Where-Object { $_.ProcessId -eq $ProcessId }
    # Bounded: a process table cannot be deeper than it is long, and the guard
    # stops a parent-id cycle from spinning forever.
    while ($current -and $depth -lt 64) {
        $current = $Processes | Where-Object { $_.ProcessId -eq $current.ParentProcessId }
        if ($current) { $depth++ }
    }
    $depth
}

Write-Host "Stopping Next.js dev server (port $Port)..." -ForegroundColor Cyan

$listeners = @()
try {
    $listeners = @(Get-NetTCPConnection -LocalPort $Port -State Listen -ErrorAction Stop |
                   Select-Object -ExpandProperty OwningProcess -Unique)
} catch {
    # Nothing listening on that port -- the server is already stopped.
}

if ($listeners.Count -eq 0) {
    Write-Host '  not running' -ForegroundColor DarkGray
} else {
    $all = Get-CimInstance Win32_Process | Select-Object ProcessId, ParentProcessId, Name

    $targets = New-Object System.Collections.Generic.HashSet[int]

    foreach ($listener in $listeners) {
        [void]$targets.Add([int]$listener)

        $top = $all | Where-Object { $_.ProcessId -eq [int]$listener }
        if (-not $top) { continue }   # exited between the two queries

        # Up: node parents only.
        $current = $top
        while ($true) {
            $parent = $all | Where-Object { $_.ProcessId -eq $current.ParentProcessId }
            if (-not $parent -or $parent.Name -notmatch '^node(\.exe)?$') { break }
            [void]$targets.Add([int]$parent.ProcessId)
            $current = $parent
            $top = $parent
        }

        # Down: everything beneath the highest node process reached.
        foreach ($descendant in (Get-Descendants $top.ProcessId $all)) {
            [void]$targets.Add([int]$descendant)
        }
    }

    # Deepest first, so a child is never left briefly parentless and writing to
    # a dead pipe. Depth comes from the process table -- pid order says nothing
    # about who is whose parent.
    $ordered = $targets |
        Sort-Object -Property @{ Expression = { Get-Depth $_ $all } } -Descending

    $killed = 0
    foreach ($target in $ordered) {
        try {
            Stop-Process -Id $target -Force -ErrorAction Stop
            $killed++
        } catch {
            # Already gone -- killing a parent often takes its children with it.
        }
    }

    Start-Sleep -Seconds 1
    Write-Host "  stopped $killed process(es)" -ForegroundColor Green
}

# --- database ---------------------------------------------------------------

Write-Host 'Stopping PostgreSQL...' -ForegroundColor Cyan
if (Test-Path "$PG\bin\pg_ctl.exe") {
    & "$PG\bin\pg_ctl.exe" -D $DATA -m fast stop 2>&1 | Out-Null
    Write-Host '  stopped cleanly' -ForegroundColor Green
} else {
    Write-Host '  no portable Postgres found' -ForegroundColor DarkGray
}

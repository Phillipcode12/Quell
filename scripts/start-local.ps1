# Starts everything Quell needs locally: PostgreSQL, then the Next.js dev server.
#
#   powershell -ExecutionPolicy Bypass -File scripts\start-local.ps1
#
# Postgres is a portable install (no admin rights were available to install it
# as a Windows service), so it does not auto-start after a reboot and has to be
# started here.

$ErrorActionPreference = 'Stop'

$PG   = 'C:\Users\phill\AppData\Local\QuellPostgres'
$DATA = Join-Path $PG 'data'
$LOG  = Join-Path $PG 'pg.log'
$PORT = 5433
$PROJ = 'C:\Users\phill\OneDrive\Documents\quell'

if (-not (Test-Path "$DATA\PG_VERSION")) {
    Write-Error "No Postgres cluster at $DATA. See PROJECT_STATE.md to rebuild it."
}

# npm/node are not on PATH in every shell; pull the machine + user PATH in.
$env:Path = [System.Environment]::GetEnvironmentVariable('Path', 'Machine') + ';' +
            [System.Environment]::GetEnvironmentVariable('Path', 'User')

Write-Host 'Starting PostgreSQL...' -ForegroundColor Cyan
$status = & "$PG\bin\pg_ctl.exe" -D $DATA status 2>&1
if ($status -match 'server is running') {
    Write-Host '  already running' -ForegroundColor DarkGray
} else {
    & "$PG\bin\pg_ctl.exe" -D $DATA -l $LOG -o "-p $PORT -c listen_addresses=localhost" start | Out-Null
    Start-Sleep -Seconds 3
    Write-Host "  started on port $PORT" -ForegroundColor Green
}

Set-Location $PROJ

Write-Host 'Starting Next.js dev server...' -ForegroundColor Cyan
Write-Host '  http://localhost:3000  (Ctrl+C to stop)' -ForegroundColor Green
npm run dev

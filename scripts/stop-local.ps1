# Stops the dev server and shuts PostgreSQL down cleanly.
#
#   powershell -ExecutionPolicy Bypass -File scripts\stop-local.ps1
#
# Run this before powering the machine off. A hard kill leaves Postgres to do
# crash recovery on the next start; it almost always recovers from the WAL, but
# a clean stop skips the risk.

$PG   = 'C:\Users\phill\AppData\Local\QuellPostgres'
$DATA = Join-Path $PG 'data'

Write-Host 'Stopping Next.js dev server...' -ForegroundColor Cyan
Get-Process -Name node -ErrorAction SilentlyContinue | Stop-Process -Force
Start-Sleep -Seconds 2
Write-Host '  stopped' -ForegroundColor Green

Write-Host 'Stopping PostgreSQL...' -ForegroundColor Cyan
if (Test-Path "$PG\bin\pg_ctl.exe") {
    & "$PG\bin\pg_ctl.exe" -D $DATA -m fast stop 2>&1 | Out-Null
    Write-Host '  stopped cleanly' -ForegroundColor Green
} else {
    Write-Host '  no portable Postgres found' -ForegroundColor DarkGray
}

@echo off
setlocal
title AarogyaNova Hospital - Local Server
cd /d "%~dp0"

where py >nul 2>&1
if %errorlevel%==0 (
  set "PYTHON=py -3"
) else (
  where python >nul 2>&1
  if errorlevel 1 (
    echo Python was not found. Install Python from https://www.python.org/downloads/
    pause
    exit /b 1
  )
  set "PYTHON=python"
)

echo.
echo AarogyaNova Hospital is starting at http://localhost:8080/index.html
echo Keep this window open while using the website.
echo Press Ctrl+C to stop the server.
echo.
start "" http://localhost:8080/index.html
%PYTHON% -m http.server 8080 --bind 127.0.0.1
pause

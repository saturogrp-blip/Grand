@echo off
REM ============================================
REM Grand Web - Backend Server Starter
REM ============================================

echo.
echo ====================================
echo Grand Interview Curator System
echo Backend Server Startup
echo ====================================
echo.

REM Check if Node.js is installed
node --version >nul 2>&1
if errorlevel 1 (
    echo.
    echo [ERROR] Node.js is NOT installed on this system!
    echo.
    echo Please install Node.js from: https://nodejs.org/
    echo.
    echo Recommended: Download and install the LTS version
    echo Then restart your command prompt
    echo.
    pause
    exit /b 1
)

echo [OK] Node.js is installed
node --version

REM Check if npm is installed
npm --version >nul 2>&1
if errorlevel 1 (
    echo [ERROR] npm is NOT installed!
    exit /b 1
)

echo [OK] npm is installed
npm --version

REM Check if backend-data.js exists
if not exist backend-data.js (
    echo.
    echo [ERROR] backend-data.js not found in current directory!
    echo Please ensure you're in the correct directory: d:\Grand Web
    pause
    exit /b 1
)

echo.
echo [OK] backend-data.js found
echo.
echo Starting backend server on port 3001...
echo.

REM Start the backend server
node backend-data.js

pause

@echo off
REM Quick Setup Script for Real-Time Data Storage System

echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║     Grand Interview - Real-Time Data Storage Setup         ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

REM Check if Node.js is installed
where node >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ Node.js is not installed!
    echo Install from: https://nodejs.org/
    pause
    exit /b 1
)

echo ✅ Node.js found: 
node --version

REM Check if npm is installed
where npm >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo ❌ npm is not installed!
    pause
    exit /b 1
)

echo ✅ npm found: 
npm --version

REM Install dependencies
echo.
echo 📦 Installing dependencies...
call npm install

REM Create data directory
echo.
echo 📁 Creating data directory...
if not exist "data" mkdir data
if not exist "data\backups" mkdir data\backups
echo ✅ Data directories created

REM Start the server
echo.
echo 🚀 Starting server...
echo.
echo ╔════════════════════════════════════════════════════════════╗
echo ║ Server is running!                                         ║
echo ║                                                            ║
echo ║ 📍 Data Editor:  http://localhost:3000/data-editor.html   ║
echo ║ 🔌 API Server:   http://localhost:3001                    ║
echo ║ 📁 Data Folder:  ./data/                                  ║
echo ║                                                            ║
echo ║ Press Ctrl+C to stop                                       ║
echo ╚════════════════════════════════════════════════════════════╝
echo.

node backend-data.js

pause

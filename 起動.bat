@echo off
cd /d "%~dp0"
echo Starting JPG to WebP Converter...
echo.
echo Browser will open at http://localhost:5173/
echo (Press Ctrl+C to stop)
echo.
npm run dev
pause

@echo off
title Push Project to GitHub - Portfolio
echo ===================================================
echo     PUSHING PORTFOLIO PROJECT TO GITHUB
echo ===================================================
echo.

:: Step 1: Detect Git
set GIT_PATH=git
where git >nul 2>nul
if %errorlevel% neq 0 (
    echo Git not found in PATH, searching standard installation paths...
    if exist "C:\Program Files\Git\cmd\git.exe" (
        set GIT_PATH="C:\Program Files\Git\cmd\git.exe"
        echo Found Git at: C:\Program Files\Git\cmd\git.exe
    ) else if exist "C:\Program Files\Git\bin\git.exe" (
        set GIT_PATH="C:\Program Files\Git\bin\git.exe"
        echo Found Git at: C:\Program Files\Git\bin\git.exe
    ) else (
        echo ERROR: Git is not found in PATH or standard installation paths.
        echo Please download and install Git from https://git-scm.com/
        pause
        exit /b 1
    )
) else (
    echo Git is available in system PATH.
)

echo.
echo Git version detected:
%GIT_PATH% --version
echo.

:: Step 2: Initialize Git if not already done
if not exist .git (
    echo [1/5] Initializing local Git repository...
    %GIT_PATH% init
) else (
    echo [1/5] Git repository already initialized.
)
echo.

:: Step 3: Configure Remote Origin
echo [2/5] Configuring remote origin...
%GIT_PATH% remote remove origin >nul 2>nul
%GIT_PATH% remote add origin https://github.com/zaidquazi/Portfolio.git
echo Remote origin set to: https://github.com/zaidquazi/Portfolio.git
echo.

:: Step 4: Stage files
echo [3/5] Staging files...
%GIT_PATH% add .
echo Files staged successfully.
echo.

:: Step 5: Commit Files
echo [4/5] Preparing commit...
set /p COMMIT_MSG="Enter commit message [Press Enter for 'Initial commit']: "
if "%COMMIT_MSG%"=="" set COMMIT_MSG=Initial commit

echo Committing files...
%GIT_PATH% commit -m "%COMMIT_MSG%"
echo.

:: Step 6: Push to GitHub
echo [5/5] Pushing to GitHub (main branch)...
%GIT_PATH% branch -M main
echo.
echo ---------------------------------------------------
echo Note: A browser window or terminal prompt may open
echo for you to authenticate with GitHub.
echo Please log in to complete the push!
echo ---------------------------------------------------
echo.
%GIT_PATH% push -u origin main
echo.

if %errorlevel% equ 0 (
    echo ===================================================
    echo SUCCESS: Project pushed to GitHub successfully!
    echo ===================================================
) else (
    echo ===================================================
    echo ERROR: Failed to push to GitHub.
    echo Please check the error messages above.
    echo ===================================================
)

echo.
pause

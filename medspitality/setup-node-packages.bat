@echo off

::Ionic and cordova? ::cordova@5.1.1
echo Install ionic (and thus cordova) globally, if not already present
echo ---------------------------------------------------------------
call npm list ionic -g || npm install -g ionic
if %ERRORLEVEL% equ 1 goto :fail

::Bower?
echo Install bower globally, if not already present
echo ---------------------------------------------------------------
call npm list bower -g || npm install -g bower
if %ERRORLEVEL% equ 1 goto :fail

::karma-cli?
::echo Install karma-cli globally, if not already present
::echo ---------------------------------------------------------------
::call npm list karma-cli@0.1.0 -g || npm install -g karma-cli@0.1.0
::if %ERRORLEVEL% equ 1 goto :fail

::gulp?
echo Install gulp globally, if not already present
echo ---------------------------------------------------------------
call npm list gulp -g || npm install -g gulp
if %ERRORLEVEL% equ 1 goto :fail

::NPM package dependencies?
echo Installing all needed node dependencies
echo ---------------------------------------------------------------
call npm install
if %ERRORLEVEL% equ 1 goto :fail
exit /b 0

::Subroutine to exit with error code
:fail
echo An error occurred during execution. Exiting...
exit /b 1
:end

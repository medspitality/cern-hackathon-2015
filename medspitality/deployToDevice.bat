@echo off

:: copy apk files
echo installing to device
adb install -r ./platforms/android/build/outputs/apk/android-debug.apk
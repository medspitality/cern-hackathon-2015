
echo Installing plugins

call cordova plugin remove com.unarin.cordova.beacon
call cordova plugin add https://github.com/petermetz/cordova-plugin-ibeacon.git 
call cordova platform remove android 
call cordova -d platform add android

pause

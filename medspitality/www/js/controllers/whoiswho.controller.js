angular.module('starter.controllers')

.controller('WhoisWhoCtrl', function($scope, $rootScope, $ionicPlatform, $cordovaBeacon,ProfileFactory){

    
    var profileslist = ProfileFactory.load();
    $scope.mycareteam = [];
    
    for(var counter = 0; counter < profileslist.length; counter++) { 
            var profile = profileslist[counter]; 
            $scope.mycareteam[profile.id] = profile;
        }
      
    $ionicPlatform.ready(function() {
        
        if(!window.cordova) return;
        
        $cordovaBeacon.requestWhenInUseAuthorization();
        $cordovaBeacon.createBeaconRegion("estimote", "A4951234-C5B1-4B44-B512-1370F02D74DE")
 
        $rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function(event, pluginResult) {
            var uniqueBeaconKey;
            for(var i = 0; i < pluginResult.beacons.length; i++) {                        
               // uniqueBeaconKey = pluginResult.beacons[i].uuid + ":" + pluginResult.beacons[i].major + ":" + pluginResult.beacons[i].minor;
                //$scope.beacons[uniqueBeaconKey] = pluginResult.beacons[i];
                var bleMajorID = pluginResult.beacons[i].major;
                var proximity = 2;
                switch (pluginResult.beacons[i].proximity) {
                        case "ProximityImmediate":
                            proximity = 0
                            break;
                        case "ProximityNear":
                            proximity = 1
                            break;
                        case "ProximityFar":
                            proximity = 2
                            break; 
                }
                $scope.mycareteam[bleMajorID].proximity = proximity;
            }
            $scope.$apply();
        });
 
        $cordovaBeacon.startRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion("estimote", "A4951234-C5B1-4B44-B512-1370F02D74DE"));
 
    });
});

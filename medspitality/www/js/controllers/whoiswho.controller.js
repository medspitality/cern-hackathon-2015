angular.module('starter.controllers')

.controller('WhoisWhoCtrl', function($scope, $rootScope, $ionicPlatform, $cordovaBeacon){
    $scope.employyes = [
    {
      id: 10,
      image: 'person1.jpg',
      name: 'Clara Healty'
    },
    {
      id: 20,
      image: 'person2.jpg',
      name: 'Mike Headache'
    },
    {
      id: 30,
      image: 'person3.jpg',
      name: 'Mike Headache'
    },
    {
      id: 40,
      image: 'person2.jpg',
      name: 'Leonardo Milano'
    },
    {
      id: 50,
      image: 'person1.jpg',
      name: 'Davide Alocci'
    },
    {
      id: 60,
      image: 'person3.jpg',
      name: 'Christina Happyfeet'
    }
  ];
     
    $scope.beacons = {};
    $scope.findEmploy = {};
 
    $ionicPlatform.ready(function() {
        
        if(!window.cordova) return;
        
        $cordovaBeacon.requestWhenInUseAuthorization();
        $cordovaBeacon.createBeaconRegion("estimote", "A4951234-C5B1-4B44-B512-1370F02D74DE")
 
        $rootScope.$on("$cordovaBeacon:didRangeBeaconsInRegion", function(event, pluginResult) {
            var uniqueBeaconKey;
            for(var i = 0; i < pluginResult.beacons.length; i++) {                        
                uniqueBeaconKey = pluginResult.beacons[i].uuid + ":" + pluginResult.beacons[i].major + ":" + pluginResult.beacons[i].minor;
                
                //$scope.beacons[uniqueBeaconKey] = pluginResult.beacons[i];
        $scope.findEmploy[uniqueBeaconKey] = $scope.employyes[pluginResult.beacons[i].major]
            }
            $scope.$apply();
        });
 
        $cordovaBeacon.startRangingBeaconsInRegion($cordovaBeacon.createBeaconRegion("estimote", "A4951234-C5B1-4B44-B512-1370F02D74DE"));
 
    });
});

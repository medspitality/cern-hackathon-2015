angular.module('starter.factories', [])

.factory('ProfileFactory', function() {
    var profiles = [];
    var profilesGroup = {};

    profilesGroup.add = function(profile) {
	profiles.push(profile);
    };

    profilesGroup.list = function() {
	return profiles;
    };

    return profilesGroup;

});

function ProfileListCtrl($scope,profiles) {
    $scope.list = profiles.list; 
}

function ProfileAddCtrl($scope, profiles) {
    $scope.add = profiles.add;
}

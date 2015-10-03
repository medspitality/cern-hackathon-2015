angular.module('starter.controllers')

.controller('ProfileslistCtrl', function($scope, $state, ProfileFactory) {
    $scope.profileslist = ProfileFactory.load();
})

.controller('ProfileCtrl', function($scope, $state, ProfileFactory) {
    $scope.profile = ProfileFactory.find(1);
})

.controller('PatienceprofileCtrl', function($scope, $stateParams) {
})

.controller('PPPProfileCtrl', ['$scope', '$rootParams', function($scope, $rootParams) {
    var pid = $rootParams.profileId;
    $scope.profile = $scope.profileslist[pid];
}]);

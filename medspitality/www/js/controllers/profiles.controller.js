angular.module('starter.controllers')

.controller('ProfileslistCtrl', function($scope, $state, ProfileFactory) {
    $scope.profileslist = ProfileFactory.load();
})

.controller('ProfileCtrl', function($scope, $state, $stateParams, ProfileFactory) {
    var pid = $stateParams.profileId;
    $scope.profile = ProfileFactory.find(pid);
})

.controller('PatienceprofileCtrl', function($scope, $stateParams) {
})

.controller('PPPProfileCtrl', ['$scope', '$rootParams', function($scope, $rootParams) {
    $scope.profile = $scope.profileslist[pid];
}]);

angular.module('starter.controllers')

.controller('ProfileslistCtrl', function($scope, $state, ProfileFactory) {
    $scope.profileslist = ProfileFactory.load();
})

.controller('ProfileslistCtrl', function($scope, $state, ProfileFactory) {
    $scope.profileslist = ProfileFactory.load();
})

.controller('ProfileCtrl', function($scope, $stateParams) {
    $scope.title = $stateParams.title;
    $scope.id = $stateParams.id;
    $scope.pic = $stateParams.pic;
})

.controller('PatienceprofileCtrl', function($scope, $stateParams) {
})

.controller('PPPProfileCtrl', ['$scope', '$rootParams', function($scope, $rootParams) {
    var pid = $rootParams.profileId;
    $scope.profile = $scope.profileslist[pid];
}]);

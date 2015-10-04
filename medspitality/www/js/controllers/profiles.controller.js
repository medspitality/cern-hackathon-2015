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

.controller('TimelinefullCtrl', function($scope, $state, TimelineFactory) {
    $scope.timeline = TimelineFactory.load();
})

.controller('TimelinesingleCtrl', function($scope, $state, $stateParams, TimelineFactory) {
    var pid = $stateParams.timelineId;
    $scope.timelinedetail = TimelineFactory.find(pid);
})
;

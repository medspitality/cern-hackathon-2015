angular.module('starter.controllers')

.controller('TimelinefullCtrl', function($scope, $state, TimelineFactory) {
    $scope.timeline = TimelineFactory.load();
})

.controller('TimelinesingleCtrl', function($scope, $state, $stateParams, TimelineFactory, ProfileFactory) {
    var pid = $stateParams.timelineId;
    $scope.timelinedetail = TimelineFactory.find(pid);
    $scope.profile = ProfileFactory.find($scope.timelinedetail.profileId);
})
;

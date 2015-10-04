angular.module('starter.controllers')

.controller('TimelineCtrl', function($scope, $state, $stateParams, timelineFactory) {
  $scope.events = timelineFactory.load();

  $scope.detailsClicked = function(event, id){
    $state.go('app.timelinedetail', {
      event: event,
      eventId: id
    });
  };
});

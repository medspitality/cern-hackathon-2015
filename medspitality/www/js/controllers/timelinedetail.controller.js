angular.module('starter.controllers')

.controller('TimelinedetailCtrl', function($scope, $state, $stateParams) {
  $scope.event = {
    id: 1,
    title: 'Nursing round',
    start: '06:00',
    end: '06:10',
    icon: 'ion-woman',
    description: 'Vital signs, morning medication',
    fullDescription: ''
  };
  $scope.detailsClicked = function(event, id){
    $state.go('app.timelinedetail', {
      event: event,
      eventId: id
    });
  };
});

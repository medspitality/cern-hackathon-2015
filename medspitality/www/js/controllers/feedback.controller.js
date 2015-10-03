angular.module('starter.controllers')

.controller('FeedbacklistCtrl', function($scope) {
  $scope.feedbacks = [
    {
      title: 'Dr Ms Peralta',
      id: 1,
      image: 'doctor_female_young.jpg',
      description: 'Pediatric'
    },
    {
      title: 'Barcelona Clinic',
      id: 2,
      image: 'logo_barcelona.png',
      description: 'Villarroel 170, Barcelona, Spain'
    }
  ];
})

.controller('FeedbackdetailCtrl', function($scope, $stateParams) {
  $scope.data = {
    'comfortable' : '5',
    'kind' : '5',
    'helful' : '5'
  };
});

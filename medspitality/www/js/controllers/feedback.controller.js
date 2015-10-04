angular.module('starter.controllers')

.controller('FeedbacklistCtrl', function($scope, $state, $stateParams,FeedbackFactory) {
  $scope.feedbacks = FeedbackFactory.all();
})

.controller('FeedbackdetailCtrl', function($scope, $stateParams) {
  $scope.data = {
    'comfortable' : '5',
    'kind' : '5',
    'helful' : '5'
  };
})

.controller('QuestionsCtrl', function($scope) {
})

.controller('HomeCtrl', function($scope) {
})
;

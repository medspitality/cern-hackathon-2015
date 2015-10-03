angular.module('starter.controllers')

.controller('ProfileslistCtrl', function($scope, $state) {
    $scope.profileslist = [
    {
        title: 'Julia Smith',
        id: 1,
        description: 'Surgery specialist',
        pic: 'doctor_2.jpg'
    },
   {
       title: 'Neil Answers',
       id: 3,
       description: 'Back especialist',
       pic: 'doctor_1.jpg'
   },
   {
       title: 'Guillermina Pilla',
       id: 4,
       description: 'Nourse',
       pic: 'nourse_1.jpg'
   }
  ];

    // $state.go('app.profile', {
    // 	title: title,
    // 	id: id,
    // 	pic: pic,
    // 	description: description
    // });
    //$scope.orderProp = 'age';
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

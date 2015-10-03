angular.module('starter.controllers')

.controller('ProfileslistCtrl', function($scope, $state) {
    $scope.profileslist = [
	{
	    title: 'Dr X',
	    id: 1,
	    description: 'a',
	    pic: 'red-fox2.jpg'
	},
	{
	    title: 'Nourse X',
	    id: 4,
	    description: 'a',
	    pic: 'red-fox2.jpg'
	},
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

.controller('PPPProfileCtrl', ['$scope', '$rootParams', function($scope, $rootParams) {
    var pid = $rootParams.profileId;
    $scope.profile = $scope.profileslist[pid];
}]);

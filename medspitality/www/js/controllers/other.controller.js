angular.module('starter.controllers')

.controller('WhoisWhoCtrl', function($scope) {
    $scope.employees = [
    {
      id: 10,
      image: 'person1.jpg',
      name: 'CLH_Healthy'
    },
    {
      id: 20,
      image: 'person2.jpg',
      name: 'Mikeheadache'
    },
    {
      id: 30,
      image: 'person3.jpg',
      name: 'Happyfeet_lady'
    }
  ];
})

.controller('SocialCtrl', function($scope) {
  $scope.people = [
    {
      id: 1,
      image: 'person1.jpg',
      name: 'CLH_Healthy'
    },
    {
      id: 2,
      image: 'person2.jpg',
      name: 'Mikeheadache'
    },
    {
      id: 3,
      image: 'person3.jpg',
      name: 'Happyfeet_lady'
    }
  ];
})

.controller('ChatCtrl', function($scope, $stateParams) {
  $scope.personId = $stateParams.personId;
  $scope.personName = $stateParams.personName;
  $scope.chats = [
    "Hello!",
    "Hallo. Ich habe eine tolle Zeit hier, aber es ist langweilig.",
    "Hello, how are you?",
    "Hey! Are you down for some Kung-Fu practice?"
  ];
});

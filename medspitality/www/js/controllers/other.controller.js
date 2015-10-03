angular.module('starter.controllers')

.controller('WhoisWhoCtrl', function($scope) {
    $scope.employees = [
    {
      id: 10,
      image: 'person1.jpg',
      name: 'Clara Healthy'
    },
    {
      id: 20,
      image: 'person2.jpg',
      name: 'Mike Headache'
    },
    {
      id: 30,
      image: 'person3.jpg',
      name: 'Christina Happyfeet'
    }
  ];
})

.controller('SocialCtrl', function($scope) {
  $scope.people = [
    {
      id: 1,
      image: 'person1.jpg',
      name: 'Clara Healty'
    },
    {
      id: 2,
      image: 'person2.jpg',
      name: 'Mike Headache'
    },
    {
      id: 3,
      image: 'person3.jpg',
      name: 'Christina Happyfeet'
    }
  ];
})

.controller('ChatCtrl', function($scope, $stateParams) {
  $scope.personId = $stateParams.personId;
  $scope.personName = $stateParams.personName;
  $scope.chats = [
    "Hello!",
    "Hallo",
    "Hello, how are you?",
    "Hey! Are you down for some Kung-Fu practice?"
  ];
});

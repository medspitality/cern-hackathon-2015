angular.module('starter.controllers')

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
    "Hallo. Ich habe eine tolle Zeit hier, aber es ist langweilig.",
    "Hello, how are you?",
    "Hey! Are you down for some Kung-Fu practice?"
  ];
});

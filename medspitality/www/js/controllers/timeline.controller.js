angular.module('starter.controllers')

.controller('TimelineCtrl', function($scope, $stateParams) {
  $scope.events = [
    {
      id: 1,
      title: 'Nursing round',
      start: '06:00',
      end: '06:10',
      icon: 'ion-woman',
      description: 'Vital signs, morning medication'
    },
    {
      id: 2,
      title: 'Washing',
      start: '07:00',
      end: '07:15',
      icon: 'ion-waterdrop',
      description: '2 pieces of whole-grain bread with butter and light cheese'
    },
    {
      id: 3,
      title: 'Breakfast',
      start: '08:00',
      end: '08:30',
      icon: 'ion-android-restaurant',
      description: '2 pieces of whole-grain bread with butter and light cheese'
    },
    {
      id: 4,
      title: 'Medical round',
      start: '09:00',
      end: '09:10',
      icon: 'ion-medkit',
      description: 'Visit of therapist and doctor'
    },
    {
      id: 5,
      title: 'Lunch',
      end: '12:00',
      start: '13:00',
      icon: 'ion-fork',
      description: 'Spinach with scrambled eggs and potatoes'
    },
    {
      id: 6,
      title: 'Imaging diagnosis',
      start: '14:00',
      end: '15:00',
      icon: 'ion-camera',
      description: 'We will check on your healing process'
    },
    {
      id: 7,
      title: 'Physiotherapy',
      start: '15:00',
      end: '15:30',
      icon: ' ion-ios-body',
      description: 'We will help you get out from bed and start walking'
    },
    {
      id: 8,
      title: 'Visiting hour',
      end: '16:00',
      start: '17:00',
      icon: 'ion-person-stalker',
      description: 'Family visit'
    },
    {
      id: 9,
      title: 'Dinner & Medication',
      end: '18:30',
      start: '19:00',
      icon: 'ion-fork',
      description: '2 pieces of whole-grain bread with salami'
    },
    {
      id: 10,
      title: 'Entertainment',
      end: '20:00',
      start: '21:00',
      icon: 'ion-chatbubbles',
      description: ''
    },
    {
      id:11,
      title: 'Bedtime',
      end: '21:00',
      start: '06:00',
      icon: 'ion-ios-moon',
      fdescription: ''
    },
  ];
});

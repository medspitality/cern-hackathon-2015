angular.module('starter.controllers')

.controller('TimelineCtrl', function($scope, $stateParams) {
  $scope.events = [
    {
      id: 1,
      title: 'Wakeup call',
      start: '06:00',
      end: '06:15',
      icon: 'ion-heart',
      description: 'Get awake, measure bloodpressure'
    },
    {
      id: 2,
      title: 'Breakfast, Washing, Medication',
      start: '08:00',
      end: '09:00',
      icon: 'ion-android-restaurant',
      description: '2 pieces of whole-grain bread with butter and light cheese'
    },
    {
      id: 3,
      title: 'Ward round',
      start: '09:00',
      end: '09:30',
      icon: 'ion-medkit',
      description: 'Visit of therapist and doctor'
    },
    {
      id: 4,
      title: 'X-ray',
      start: '10:00',
      end: '10:30',
      icon: 'ion-camera',
      description: 'We will check on your healing process'
    },
    {
      id: 5,
      title: 'Taking of blood',
      start: '10:30',
      end: '11:00',
      icon: ' ion-thermometer',
      description: ''
    },
    {
      id: 6,
      title: 'Visiting hour',
      end: '11:00',
      start: '12:00',
      icon: 'ion-people',
      fdescription: 'Family visit'
    },
    {
      id: 7,
      title: 'Lunch',
      end: '12:00',
      start: '13:00',
      icon: 'ion-fork',
      fdescription: 'Spinach with scrambled eggs and potatoes'
    },
  ];
});

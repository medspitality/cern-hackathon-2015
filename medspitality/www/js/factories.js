angular.module('starter.factories', [])

.factory('TimelineFactory', function() {
  var timelineFull = [];
  timelineFull.load = function(){
    return [
      {
        id: 0,
        title: 'Enter the hospital',
        start: '00:00',
        end: '00:00',
        icon: 'ion-cross',
        description: 'Welcome'
      },
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
  };

timelineFull.find = function(id){
    tf = timelineFull.load();
  return tf[id];
}

})

.factory('ProfileFactory', function() {
    var profilesAll = [];

    profilesAll.load = function(){
	return [
	    {
		title: 'Julia Smith',
		id: 0,
    job: 'Surgery specialist',
		description: 'Julia loves cats and grounge music. She studied in London and already operated more than 200 patients.',
		pic: 'doctor_2.jpg',
    proximity: 2
	    },
	    {
		title: 'Neil Answers',
		id: 1,
    description: 'Neil is a doctor since 1987 when he graduated in Rome. He loves horse riding.',
		job: 'Back especialist',
		pic: 'doctor_1.jpg',
    proximity: 2
	    },
	    {
		title: 'Guillermina Pilla',
		id: 2,
    description: 'Guillermina has two sons that play rugby. She got her diploma in Madrid. She loves classical music.',
		job: 'Nourse',
		pic: 'nourse_1.jpg',
    proximity: 2
	    }
	]};

  profilesAll.find = function(id){
    pf = profilesAll.load();
    return pf[id];
  };

    return profilesAll;

});

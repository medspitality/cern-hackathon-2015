angular.module('starter.factories', [])

.factory('TimelineFactory', function() {
  var timeline = {};
  timeline.load = function(){
    return [
      {
        id: 0,
        title: 'Nursing round',
        start: '06:00',
        end: '06:10',
        showlocation: false,
        icon: 'ion-woman',
        description: 'Vital signs, morning medication',
        fullDescription: 'The nurse will take your blood pressure, heart rate and temperature. She will also withdraw some blood to run blood tests.',
        profileId: 0
      },
      {
        id: 1,
        title: 'Washing',
        showlocation: false,
        start: '07:00',
        end: '07:15',
        icon: 'ion-waterdrop',
        description: '2 pieces of whole-grain bread with butter and light cheese',
        fullDescription: 'It will be time for your shower. A nurse will help you if you need assistance.',
        profileId: 1
      },
      {
        id: 2,
        title: 'Breakfast',
        showlocation: false,
        start: '08:00',
        end: '08:30',
        icon: 'ion-android-restaurant',
        description: '2 pieces of whole-grain bread with butter and light cheese',
        fullDescription: '',
        profileId: 1
      },
      {
        id: 3,
        title: 'Medical round',
        start: '09:00',
        showlocation: false,
        end: '09:10',
        icon: 'ion-medkit',
        description: 'Visit of therapist and doctor',
        fullDescription: 'The medical team will come to see you and discuss your treatment. A specialist will come to see you. After that you will meet with the medical team and your family member(s).',
        profileId: 2

      },
      {
        id: 4,
        title: 'Imaging diagnosis',
        start: '11:00',
        showlocation: true,
        end: '11:30',
        icon: 'ion-camera',
        description: 'MRI',
        fullDescription: 'You will have an MRI. The procedure takes 20 to 40 minutes, during which you will hear loud noises, which are normal. The procedure is painless.',
        profileId: 2
      },
      {
        id: 5,
        title: 'Lunch',
        end: '13:00',
        start: '12:00',
        showlocation: false,
        icon: 'ion-fork',
        description: 'Spinach with scrambled eggs and potatoes',
        fullDescription: '',
        profileId: 2
      },
      {
        id: 6,
        title: 'Physiotherapy',
        start: '15:00',
        showlocation: true,
        end: '15:30',
        icon: ' ion-ios-body',
        description: 'We will help you get out from bed and start walking',
        fullDescription: '',
        profileId: 2
      },
      {
        id: 7,
        title: 'Visiting hour',
        end: '16:00',
        showlocation: false,
        start: '17:00',
        icon: 'ion-person-stalker',
        description: 'Family visit',
        fullDescription: 'n/a',
        profileId: 2
      },
      {
        id: 8,
        title: 'Dinner & Medication',
        end: '18:30',
        start: '19:00',
        showlocation: false,
        icon: 'ion-fork',
        description: '2 pieces of whole-grain bread with salami',
        fullDescription: '',
        profileId: 2
      },
      {
        id: 9,
        title: 'Entertainment',
        showlocation: false,
        end: '20:00',
        start: '21:00',
        icon: 'ion-chatbubbles',
        description: 'Have chats in the meeting room or watch TV there.',
        profileId: 0
      },
      {
        id:10,
        title: 'Bedtime',
        end: '21:00',
        start: '06:00',
        showlocation: false,
        icon: 'ion-ios-moon',
        description: 'Hava a good sleep',
        profileId: 0
      }];
    };
    timeline.find = function(id){
      var tf = timeline.load();
      return tf[id];
    };
    return timeline;
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
          born: 'June 11, 1987',
          proximity: 2
        },
        {
          title: 'Neil Answers',
          id: 1,
          description: 'Neil is a doctor since 1987 when he graduated in Rome. He loves horse riding.',
          job: 'Back especialist',
          pic: 'doctor_1.jpg',
          born: 'January 21, 1957',
          proximity: 2
        },
        {
          title: 'Guillermina Pilla',
          id: 2,
          description: 'Guillermina has two sons that play rugby. She got her diploma in Madrid. She loves classical music.',
          job: 'Nurse',
          pic: 'nourse_1.jpg',
          born: 'September 29, 1954',
          proximity: 2
        },
        {
          title: 'Mikaela Peralta',
          id: 3,
          description: 'A lovely person who will take care of your kids.',
          job: 'Pediatric',
          pic: 'doctor_female_young.jpg',
          born: 'October 4, 1985',
          proximity: 2
        }
      ]
    };

    profilesAll.find = function(id){
      pf = profilesAll.load();
      return pf[id];
    };

    return profilesAll;
  })

  .factory('FeedbackFactory', function() {
    var factory = [];
    // TODO(fabriph): careful, id's are used as index of array, not only to index the objet itself.
    var allData = [
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

    factory.all = function(){
      return allData;
    };

    factory.find = function(id){
      return allData[id];
    };

    return factory;
  });

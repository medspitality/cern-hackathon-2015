angular.module('starter.factories', [])

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
      	job: 'Nurse',
      	pic: 'nourse_1.jpg',
        proximity: 2
      },
      {
        title: 'Mikaela Peralta',
        id: 3,
        description: 'A lovely person who will take care of your kids.',
        job: 'Pediatric',
        pic: 'doctor_female_young.jpg',
        proximity: 2
      }
    ];
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

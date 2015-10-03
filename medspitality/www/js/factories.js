angular.module('starter.factories', [])

.factory('ProfileFactory', function() {
    var profilesAll = [];

    profilesAll.load = function(){
	return [
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
	]};

  profilesAll.find = function(id){
    pf = profilesAll.load();
    return pf[id];
  };

    return profilesAll;

});

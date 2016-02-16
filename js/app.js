angular.module('myApp', [])
	.controller('myCtrl', function($scope){
		$scope.maleName = 'Male name';
		$scope.dirtyTask = 'dirty task';
		$scope.obnxCeleb = 'obnoxious celebrity'; 
		$scope.jobTitle = 'Job Title'; 
		$scope.celebrity = 'celebrity'; 
		$scope.hugeNumber = 'huge number';
		$scope.tediousTask = 'tedious task';
		$scope.uselessSkill = 'useless skill'; 
		$scope.adjective = 'adjective';
		$scope.male = "true";	// radio button needs a string not a boolean

		// **********Need to call maleFemale() on page load**********






		$scope.maleFemale = function(){
			
			var isMale = eval($scope.male);
			var heShe;

			if (isMale){
				$scope.maleName = 'Male name';
				$scope.heShe = 'he';
				




			} else {
				$scope.maleName = 'Female name';
				$scope.heShe = 'she';
				





			};
		};
	
	});


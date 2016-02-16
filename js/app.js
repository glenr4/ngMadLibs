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
		$scope.male = true;

		console.log("initialisation complete");

		$scope.maleFemale = function(){
			console.log("male: "+ (typeof $scope.male));
			$scope.male = eval($scope.male);
			console.log("male: "+ (typeof $scope.male));

			var heShe;
			if ($scope.male){
				$scope.heShe = 'he';
				console.log("he");
			} else {
				$scope.heShe = 'she';
				console.log("she");
			};

			// console.log("maleFemale() male: "+male+" heShe: "+$scope.heShe);
		};
	});
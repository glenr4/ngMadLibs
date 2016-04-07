angular.module('myApp', ['ngMessages', 'ngAnimate'])
	.controller('myCtrl', function($scope){

		$scope.male = "true";	// radio button needs a string not a boolean

		// Swap between male and female terms
		$scope.maleFemale = function(){
			var isMale = $scope.$eval($scope.male);

			if (isMale){
				$scope.maleNamePlace = 'Male name';
				$scope.heShe = 'he';
				$scope.hisHer = 'his';
				$scope.himHer = 'him';
			} else {
				$scope.maleNamePlace = 'Female name';
				$scope.heShe = 'she';
				$scope.hisHer = 'her';
				$scope.himHer = 'her';
			};
		};

		// Submit
		$scope.submit = function(){
			// Process button click, show error if validation is not true
			if ($scope.userForm.$valid == false){
				$scope.inputValid = "";
			} else {
				$scope.inputValid = "true";
			}		
		};

		// Reset form
		$scope.reset = function(){
			// Clear input values
			$scope.maleName = "";
			$scope.dirtyTask = "";
			$scope.obnxCeleb = "";
			$scope.jobTitle = "";
			$scope.celebrity = "";
			$scope.hugeNumber = "";
			$scope.tediousTask = "";
			$scope.uselessSkill = "";
			$scope.adjective = "";

			// Reset radio button
			$scope.male = "true";
			$scope.maleFemale();
			
			// Reset form
			$scope.userForm.$setPristine();
			$scope.userForm.$setUntouched();

			// Show input form again
			$scope.inputValid = "";
		};


		// Initialise variables
		$scope.maleFemale();
		$scope.inputValid = "";
	});



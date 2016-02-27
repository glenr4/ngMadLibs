angular.module('myApp', [])
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
				
			}

		};


		// Initialise variables
		$scope.maleFemale();
	});



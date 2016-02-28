angular.module('myApp', ['ngMessages'])
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
			console.log("Submit!");
			// Process button click, show error if validation is not true
			if ($scope.userForm.$valid == false){
				$scope.inputValid = "";
			} else {
				$scope.inputValid = "true";
			}

		};

		// Reset form
		$scope.reset = function(){
			console.log("reset!");

			// Clear input values

			// This method does not update the screen, why?
			// console.log($scope.userForm.maleName.$viewValue);
			// $scope.userForm = angular.copy(blankForm);
			// console.log($scope.userForm.maleName.$viewValue);

			// THere should be a better way than this!
			$scope.maleName = "";
			$scope.dirtyTask = "";
			$scope.obnxCeleb = "";
			$scope.jobTitle = "";
			$scope.celebrity = "";
			$scope.hugeNumber = "";
			$scope.tediousTask = "";
			$scope.uselessSkill = "";
			$scope.adjective = "";

			$scope.userForm.$setPristine();
			$scope.userForm.$setUntouched();

			// Show input form again
			$scope.inputValid = "";

				

		};


		// Initialise variables
		$scope.maleFemale();
		$scope.inputValid = "";
		var blankForm;

		// This is only used for the angular.copy reset method which does not work
		angular.element(document).ready(function(){
			blankForm = angular.copy($scope.userForm);
		});
	});



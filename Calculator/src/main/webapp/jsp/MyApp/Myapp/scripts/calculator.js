'user strict';
			
	/*		var calculator = {
			sum: function (x, y) {
				return x + y;
			},
			subtract: function (x, y) {
				return x - y;
			},
			divide: function (x, y) {
				return (y === 0) ? 0 : x / y;
			}
		}*/




		angular.module('MyApp').controller('CalculatorController', ['$scope','calculatorservice', function($scope,calculatorservice){

			$scope.z=0;
			var zvalue;
	
			$scope.sum = function(){
			var dataObj = {
					"number1" : $scope.x,
					"number2" : $scope.y,
				};
			var callsum = calculatorservice.sum(dataObj);
			callsum.then(function(data){
				$scope.z= data;
			});
			}
			
		}]);
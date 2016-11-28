'user strict';




angular.module('MyApp')
		.constant('baseURL', 'http://localhost:8080/')
	    .service('calculatorservice',
	    	    ['$http','baseURL',
	    	    function($http,baseURL){

				/*var dataObj = {
					"number1" : "1",
					"number2" : "2",
				};*/

				var req = {
				 method: 'POST',
				 url: 'http://localhost:8080/AngulerSpring5/calculator/add/numbers',
				 headers: {
				   'Content-Type': 'application/json'
				 }
				// data: dataObj
				};
				
				var sum = function (dataObj){
				req.data=dataObj;
	    	    return  $http(req).then(function successCallback(response) {
	    	    				return response.data.resultValue;
							   }, function errorCallback(response) {
							    return 0;
							    });
	    		}
	    	

	    		this.sum = sum;

		}
		]);


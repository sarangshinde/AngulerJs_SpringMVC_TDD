'user strict';
/*describe('calculator-controller', function () {

	 beforeEach(module('MyApp'));

	 var calculatorController,calculatorScope;
			
		/*	describe('sum', function () {
				it('1 + 1 should equal 2', function () {
					expect(calculator.sum(1, 1)).toBe(2);
				});	
			});
	beforeEach(inject(function($controller,$rootScope){

		calculatorScope=$rootScope.$new();

		calculatorController= $controller('CalculatorController', {
			$scope:calculatorScope
		});

	}));

	it('value of z should be zero',function(){

		expect(calculatorScope.z).toEqual(0);
	});	

	it('sum of 1+1 equal to 2',function(){
		calculatorScope.x=1;
		calculatorScope.y=1;
		calculatorScope.sum();
		expect(calculatorScope.z).toEqual(2);
	});

});*/


  describe('http tests (when vs expect)', function () {
          
             beforeEach(module('MyApp'));

                 beforeEach(inject(function($controller, _$httpBackend_,$rootScope,calculatorservice) 
    {
   	calculatorScope=$rootScope.$new();
    $httpBackend = _$httpBackend_;
 
	 calculatorserviceobj= calculatorservice;
     calculatorController = $controller('CalculatorController',
     						 { $scope: calculatorScope,
     						 	calculatorservice :calculatorserviceobj
     						  });

     /*  $httpBackend.expect('POST','http://localhost:8080/AngulerSpring5/calculator/add/numbers',dataObj,{'Content-Type': 'application/json'})
    .respond({ 
    	data: httpData
    });*/
  }));

          it('should demonstrate using when (200 status)', inject(function($http) {
            
            var $scope = {};
            /* code under test */
            $http.get('http://localhost/foo')
              .success(function(data, status, headers, config) {
                $scope.valid = true;
                $scope.response = data;
              }).error(function(data, status, headers, config) {
                $scope.valid = false;
            });
            /* end */
            $httpBackend
              .when('GET', 'http://localhost/foo')
              .respond(200, { foo: 'bar' });
            $httpBackend.flush();
            expect($scope.valid).toBe(true);
            expect($scope.response).toEqual({ foo: 'bar' });
          }));
         });


describe('mock http test', function() {

 var calculatorController,calculatorScope;

 var dataObj = {
					number1 : 1,
					number2 : 2,
				};
			var req = {
				 method: 'POST',
				 url: 'http://localhost:8080/AngulerSpring5/calculator/add/numbers',
				 data: dataObj,
				 headers: {
				   'Content-Type': 'application/json'
				 }
				
				};
  var httpData = {"resultValue":3,"links":[]};
  var calculatorserviceobj;
  var http;
  
   beforeEach(module('MyApp'));

    beforeEach(inject(function($controller, _$httpBackend_,$rootScope,calculatorservice,$http) 
    {
   	calculatorScope=$rootScope.$new();
    $httpBackend = _$httpBackend_;
 	
	 calculatorserviceobj= calculatorservice;
     calculatorController = $controller('CalculatorController',
     						 { $scope: calculatorScope,
     						 	$http:$http,
     						 	calculatorservice :calculatorserviceobj
     						  });

   /*    $httpBackend.expect('POST','http://localhost:8080/AngulerSpring5/calculator/add/numbers',dataObj,{'Content-Type': 'application/json'})
    .respond({ 
    	data: httpData
    });*/
  }));



  it('calculator additon', inject(function($http) { //function () {
  	// $httpBackend.expect('POST','http://localhost:8080/AngulerSpring5/calculator/add/numbers');
    	calculatorScope.sumdummy = function(){
    		console.log("ok");
    	 return  $http.post('http://localhost/AngulerSpring5/calculator/add/numbers')
              .success(function(data, status, headers, config) {
              	   		console.log("ok1	");
              	 calculatorScope.response=data;
              	 return  calculatorScope.response;
              }).error(function(data, status, headers, config) {
                return 0;
            });
 	}

   $httpBackend
   .when('POST','http://localhost/AngulerSpring5/calculator/add/numbers')
    .respond(200,httpData);
var responddata;
   var servicedata = calculatorScope.sumdummy();
  // console.log(calculatorScope.sum());
   servicedata.then(function(data){
				responddata= data.data;
			});
    $httpBackend.flush();
   
    //console.log(servicedata);

    expect(responddata).toEqual(httpData);
  }));

});
<!DOCTYPE html>
<html lang="en" ng-app="MyApp">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1">
<!-- The above 3 meta tags *must* come first in the head; any other head
content must come *after* these tags -->
<title>Sample App</title>
<!-- Bootstrap -->
<link href="../../bower_components/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
<link href="../../bower_components/bootstrap/dist/css/bootstrap-theme.min.css" rel="stylesheet">
<link href="../../bower_components/font-awesome/css/font-awesome.min.css" rel="stylesheet">
<link href="../styles/bootstrap-social.css" rel="stylesheet">
<link href="../styles/mystyles.css" rel="stylesheet">
<script src="../../bower_components/angular/angular.min.js"></script>
<script src="../scripts/app.js"></script>
<script src="../scripts/calculatorservices.js"></script>
<script src="../scripts/calculator.js"></script>


</head>
<body>
	
	<div ng-controller="CalculatorController">
			<input ng-model="x" type="number">
			<input ng-model="y" type="number">
			<strong>{{z}}</strong>
			<!-- the value for ngClick maps to the sum function within the controller body -->
			<input type="button" ng-click="sum()" value="+">
		</div>
	
</body>
</html>
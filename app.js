var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope){
	 $scope.increase = function(value, left, right)
	 {
	 	if((value + 1) > right) {
	 		return left;}
	 	else {
	 		return value + 1;
	 	}
	 }

	 $scope.decrease = function(value, left, right)
	 {
	 	if((value - 1) < left) {
	 		return right;}
	 	else {
	 		return value - 1;
	 	}
	 }
});
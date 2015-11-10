var app = angular.module( 'Albyxyz', [ 'ngMaterial' ] );

app.controller('HomeController', function($scope) {
  $scope.expandPage = false;
  setTimeout(function(){
  	$scope.expandPage = true;
  	$scope.$apply();
  }, 3500);
});
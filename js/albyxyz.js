var app = angular.module( 'Albyxyz', [ 'ngMaterial' ] );

app.controller('HomeController', function($scope, $mdToast) {
  $scope.expandPage = false;
  $scope.matteDay = "";
  setTimeout(function(){
  	$scope.expandPage = true;
  	$scope.$apply();
  	init();
  }, 2500);

  function init() {
  	if(new Date().getDay() == 4) {
	  	$scope.matteDay = 'Today is the "sfancula matte day"! Celebrate with us and post a "vaffanculo matte" on his Facebook page!';
	  	var toast = $mdToast.simple()
	          .content('Celebrate with us!')
	          .action('OK')
	          .highlightAction(true)
	          .position("bottom right");
	    $mdToast.show(toast).then(function() {

	    });
	  }
  }
});
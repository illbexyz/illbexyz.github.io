var app = angular.module( 'Albyxyz', [ 'ngMaterial' ] );

app.controller('HomeController', function($scope, $mdToast, $mdDialog) {
  $scope.projects = [{
      title: "OsZoo",
      description: "This is MEAN stack application that allows you to select an OS from a list and execute it directly in your browser.",
      image: "imgs/oszoo.png",
      github: "https://github.com/albyxyz/oszoo"
  },{
      title: "LaTeX IT",
      description: "A LaTeX editor for Android. It provides syntax highlighting and the compilation of the files through a remote server.",
      image: "imgs/latexit.png",
      github: "https://github.com/albyxyz/latex-it"
  }, {
      title: "Wowtaria",
      description: "An university project. It allows you to create annotations on a set of scientific documents.",
      image: "imgs/wowtaria.png",
      github: "https://github.com/naughtydoge/wowtaria"
  },];
  $scope.expandPage = false;
  $scope.matteDay = "";
  setTimeout(function(){
  	$scope.expandPage = true;
  	$scope.$apply();
  	init();
  }, 2500);

  function init() {
    setTimeout(showMatteDay, 1000);
  }

  function showMatteDay(){
    if(new Date().getDay() == 4) {
      $scope.matteDay = 'Thursday is the "sfancula matte day"! Celebrate with us and post a "vaffanculo matte" on his Facebook page!';
      var toast = $mdToast.simple()
            .content('Celebrate with us!')
            .action('OK')
            .highlightAction(true)
            .position("bottom right");
      $mdToast.show(toast).then(function(response) {
        if(response == "ok"){
          var confirm = $mdDialog.confirm()
                .title('Vaffanculo Matte!')
                .content('<p>Thursday is the <b>fuck matte day</b>! Celebrate with us and post <b>vaffanculo matte</b> on his Facebook page!</p><p><a href="https://www.facebook.com/kdpkke" target="_blank">His Facebook page</a></p>')
                .ariaLabel('Fuck Matte day')
                .ok('Hail the Doge');
          $mdDialog.show(confirm);
        }
      });
    }
  }
});
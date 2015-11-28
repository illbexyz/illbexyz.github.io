var app = angular.module( 'Albyxyz', [ 'ngMaterial' ] );

app.controller('HomeController', function($scope, $mdToast, $mdDialog, $interval, $timeout) {
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
      description: "An university project. It allows you to create annotations on a set of scientific documents. And it's full of Doges. Wow.",
      image: "imgs/wowtaria.png",
      github: "https://github.com/naughtydoge/wowtaria"
  },];

  $scope.socials = [
    {title: 'Gmail', icon: 'imgs/email.svg', link: 'mailto:albyx.n@gmail.com', username: 'albyx.n'},
    {title: 'Twitter', icon: 'imgs/twitter.svg', link: 'https://twitter.com/albyxyz_', username: 'albyx93'},
    {title: 'Facebook', icon: 'imgs/facebook.svg', link: 'https://www.facebook.com/albertonicoletti93', username: 'albertonicoletti93'},
    {title: 'Github', icon: 'imgs/github.svg', link: 'https://github.com/albyxyz', username: 'albyxyz'},
    {title: 'LinkedIn', icon: 'imgs/linkedin.svg', link: 'https://www.linkedin.com/profile/view?id=AAIAAAjCRQcBkJjwBv3V55_nr2fucKORMzAsnNI', username: "Alberto Nicoletti"}
  ];

  $scope.headerClass = '';
  $scope.bullshitClass = '';
  $scope.bullshit = '';
  $scope.bullshits = ["Doges will rule over the world.", "Sticazzi rega."]

  $scope.expandPage = false;
  $scope.matteDay = "";
  setTimeout(function(){
  	$scope.expandPage = true;
  	$scope.$apply();
  	init();
  }, 3000);

  function init() {
    if(new Date().getDay() == 4) {
      setTimeout(showMatteDay, 1000);
    }
    $scope.headerClass = "dogebg";
    $scope.$apply();
    //startBullshits();
  }

  function showMatteDay(){
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

  startBullshits = function() {
    showBullshit();
  }

  showBullshit = function() {
    var random = Math.floor((Math.random() * $scope.bullshits.length));
    $scope.bullshit = $scope.bullshits[random];
    $scope.bullshitClass = "enter";
    $timeout(removeBullshit, 2000);
  }

  removeBullshit = function() {
    $scope.bullshitClass = "remove";
    $timeout(removeClass, 300);
  }

  removeClass = function() {
    $scope.bullshit = '';
    $timeout(showBullshit, 1000);
  }

});

app.config(function($mdThemingProvider) {
  var background = $mdThemingProvider.extendPalette('grey', {
    'A100': '263238',
    'contrastDefaultColor': 'dark',
    'contrastDarkColors': undefined,
    'contrastLightColors': ['50', '100', 
     '200', '300', '400', 'A100']
  });
  $mdThemingProvider.definePalette('background', background);
  $mdThemingProvider.theme('docs-dark', 'default')
    .dark()
    .primaryPalette('blue')
    .backgroundPalette('background');
});
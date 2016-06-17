var app = angular.module( 'Illbexyz', [ 'ngMaterial' ] );

app.controller('HomeController', function($scope, $mdToast, $mdDialog, $interval, $timeout) {
  $scope.projects = [{
      title: "OsZoo",
      description: "This is MEAN stack application that allows you to select an OS from a list and execute it directly in your browser.",
      image: "imgs/oszoo.png",
      github: "https://github.com/illbexyz/oszoo"
  }, {
      title: "LaTeX IT",
      description: "A LaTeX editor for Android. It provides syntax highlighting and the compilation of the files through a remote server.",
      image: "imgs/latexit.png",
      github: "https://github.com/illbexyz/latex-it"
  }, {
      title: "Wowtaria",
      description: "An university project. It allows you to create annotations on a set of scientific documents. And it's full of Doges. Wow.",
      image: "imgs/wowtaria.png",
      github: "https://github.com/naughtydoge/wowtaria"
  }, {
    title: "Pretty Raffle",
    description: "Progressive web app using Firebase 3. Allows you to create raffle lists and extract from them.",
    image: "imgs/pretty-raffle.png",
    github: "https://github.com/illbexyz/pretty-raffle"
  }
];

  $scope.socials = [
    {title: 'Gmail', icon: 'imgs/email.svg', link: 'mailto:albyx.n@gmail.com', username: 'albyx.n'},
    {title: 'Twitter', icon: 'imgs/twitter.svg', link: 'https://twitter.com/illbexyz', username: 'illbexyz'},
    {title: 'Facebook', icon: 'imgs/facebook.svg', link: 'https://www.facebook.com/albertonicoletti93', username: 'albertonicoletti93'},
    {title: 'Github', icon: 'imgs/github.svg', link: 'https://github.com/illbexyz', username: 'illbexyz'},
    {title: 'LinkedIn', icon: 'imgs/linkedin.svg', link: 'https://www.linkedin.com/profile/view?id=AAIAAAjCRQcBkJjwBv3V55_nr2fucKORMzAsnNI', username: "Alberto Nicoletti"}
  ];

  $scope.expandPage = false;
  setTimeout(function(){
  	$scope.expandPage = true;
    $scope.headerClass = "dogebg";
  	$scope.$apply();
  }, 3000);

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

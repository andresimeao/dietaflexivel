// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
var app = angular.module('starter', ['ionic'])

app.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})


app.config(function($stateProvider, $urlRouterProvider){

  $stateProvider.state('calculo-flexivel',{
    url: '/calculo-flexivel',
    templateUrl: 'templates/calculo-flexivel.html',
    controller: 'CalculoFlexivelCtrl'
  });
  $stateProvider.state('explicacao-atividade',{
    url: '/explicacao-atividade',
    templateUrl: 'templates/explicacao-atividade.html',
    controller: 'DuvidasCtrl'
  });
  $stateProvider.state('explicacao-objetivo',{
    url: '/explicacao-objetivo',
    templateUrl: 'templates/explicacao-objetivo.html',
    controller: 'DuvidasCtrl'
  });
  $stateProvider.state('resultado-flexivel',{
    url: '/resultado-flexivel',
    templateUrl: 'templates/resultado-flexivel.html',
    controller: 'ResultadoFlexivelCtrl'
  });
  $stateProvider.state('tela-inicial',{
    url: '/tela-inicial',
    templateUrl: 'templates/tela-inicial.html',
    controller: 'TelaInicialCtrl'
  });
  $stateProvider.state('cadastro',{
    url: '/cadastro',
    templateUrl: 'templates/cadastro.html',
    controller: 'CadastroCtrl'
  });
  $stateProvider.state('login',{
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'LoginCtrl'
  });

   $urlRouterProvider.otherwise('/tela-inicial');


});


var app = angular.module('dietaFlexivel', ['ionic', 'firebase']);

app
    .run(function($ionicPlatform) {
        $ionicPlatform.ready(function() {
            if (window.cordova && window.cordova.plugins.Keyboard) {

                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

                cordova.plugins.Keyboard.disableScroll(true);
            }
            if (window.StatusBar) {
                StatusBar.styleDefault();
            }
        });
    })

.config(function($stateProvider, $urlRouterProvider) {

    $stateProvider

        .state('create-foods', {
        url: '/create-foods',
        templateUrl: 'templates/create-foods.html',
        controller: 'CreateFoodsCtrl'
    })

    .state('app.tabs-foods.my-foods', {
        url: '/my-foods',
        views: {
            'tabMyfoods': {
                templateUrl: 'templates/my-foods.html',
                controller: 'MyFoodsCtrl'
            }
        }
    })

    .state('app.tabs-foods.favorite-foods', {
        url: '/favorite-foods',
        views: {
            'tabFavoritefoods': {
                templateUrl: 'templates/favorite-foods.html',
                controller: 'FavoriteFoodsCtrl'
            }
        }
    })

    .state('app.tabs-foods', {
        url: '/tabs-foods',
        views: {
            'menuContent': {
                templateUrl: 'templates/tabs-foods.html',
                controller: 'TabsFoodsCtrl'
            }
        }
    })

    .state('app', {
        url: '/app',
        abstract: true,
        templateUrl: 'templates/menu.html',
        controller: 'AppCtrl'
    })

    .state('app.calculo-flexivel', {
        url: '/calculo-flexivel',
        views: {
            'menuContent': {
                templateUrl: 'templates/calculo-flexivel.html',
                controller: 'CalculoFlexivelCtrl'
            }
        }
    })

    .state('app.dieta', {
        url: '/dieta',
        views: {
            'menuContent': {
                templateUrl: 'templates/dieta.html',
                controller: 'DietaCtrl'
            }
        }
    })

    .state('app.resultado-flexivel', {
        url: '/resultado-flexivel',
        views: {
            'menuContent': {
                templateUrl: 'templates/resultado-flexivel.html',
                controller: 'ResultadoFlexivelCtrl'
            }
        }
    })

    .state('explicacao-atividade', {
        url: '/explicacao-atividade',
        templateUrl: 'templates/explicacao-atividade.html',
        controller: 'DuvidasCtrl'
    })

    .state('explicacao-objetivo', {
        url: '/explicacao-objetivo',
        templateUrl: 'templates/explicacao-objetivo.html',
        controller: 'DuvidasCtrl'
    })

    .state('tela-inicial', {
        url: '/tela-inicial',
        templateUrl: 'templates/tela-inicial.html',
        controller: 'TelaInicialCtrl'
    })

    .state('cadastro', {
        url: '/cadastro',
        templateUrl: 'templates/cadastro.html',
        controller: 'CadastroCtrl'
    })

    .state('login', {
        url: '/login',
        templateUrl: 'templates/login.html',
        controller: 'LoginCtrl'
    });

    $urlRouterProvider.otherwise('/tela-inicial');
});
app.controller('CalculoFlexivelCtrl',
    function($scope, $state, $firebaseAuth) {
        var firebaseUser = $firebaseAuth().$getAuth();
        $scope.teste = firebaseUser.uid;

        $scope.calcular = function() {
            $state.go('resultado-flexivel');
        }

    });
app.controller('DuvidasCtrl',
    function($scope, $state, $ionicHistory) {
        $scope.showAtividade = function() {
            $state.go('explicacao-atividade');
        }
        $scope.showObjetivo = function() {
            $state.go('explicacao-objetivo');
        }
    });

app.controller('ResultadoFlexivelCtrl',
    function($scope, $state) {});

app.controller('TelaInicialCtrl',
    function($scope, $state) {
        $scope.showLogin = function() {
            $state.go('login');
        }
        $scope.showCadastro = function() {
            $state.go('cadastro');
        }
    });

app.controller('LoginCtrl',
    function($scope, $state, $ionicHistory, $firebaseAuth, $ionicLoading, $ionicPopup) {
        $scope.usuario = {
            email: '',
            password: ''
        };

        $scope.authObj = $firebaseAuth();

        var firebaseUser = $scope.authObj.$getAuth();


        if (firebaseUser) {
            $state.go('app.resultado-flexivel');
        }

        $scope.login = function(usuario) {
            $ionicLoading.show({ template: 'Loading...' });
            $scope.authObj.$signInWithEmailAndPassword(usuario.email, usuario.password)
                .then(function(firebaseUser) {
                    console.log("Signed in as:", firebaseUser.uid);
                    $ionicLoading.hide();
                    $state.go('app.resultado-flexivel');
                }).catch(function(error) {
                    $ionicLoading.hide();
                    var alertPopup = $ionicPopup.alert({
                        title: 'Falha no Login',
                        template: error.message
                    });
                });
        }

        $scope.voltar = function() {
            $ionicHistory.goBack(-1);
        }
    });

app.controller('CadastroCtrl',
    function($scope, $state, $ionicHistory, $firebaseAuth, $ionicPopup, $ionicLoading, AdicionarUsuario) {

        $scope.usuario = {};

        $scope.authObj = $firebaseAuth();

        $scope.cadastrar = function(usuario) {

            $ionicLoading.show({ template: 'Salvando...' });

            $scope.authObj.$createUserWithEmailAndPassword(usuario.email, usuario.password)
                .then(function(firebaseUser) {

                    $ionicLoading.hide();

                    console.log("User " + firebaseUser.uid + " created successfully!");

                    AdicionarUsuario.addUsuario(firebaseUser, usuario);
                    $state.go('app.calculo-flexivel');

                }).catch(function(error) {

                    $ionicLoading.hide();

                    var alertPopup = $ionicPopup.alert({
                        title: 'Falha no Registro',
                        template: error.message
                    });
                });
        }

        $scope.voltar = function() {
            $ionicHistory.goBack(-1);
        }
    });

app.controller('AppCtrl', function($scope, $state, $firebaseAuth, $firebaseObject) {
    $scope.authObj = $firebaseAuth();

    var firebaseUser = $scope.authObj.$getAuth();

    $scope.usuario = angular.copy(firebaseUser);

    var ref = firebase.database()
        .ref('usuarios/' + firebaseUser.uid + '/status');
    $firebaseObject(ref).$loaded(function(obj) {
        $scope.usuario.status = obj.$value;
    });

    $scope.logout = function() {
        $scope.authObj.$signOut();
        $state.go('tela-inicial');
    }
});
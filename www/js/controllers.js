app.controller('CalculoFlexivelCtrl',
    function($scope, $state) {

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
            $state.go('resultado-flexivel');
        }

        $scope.login = function(usuario) {
            $ionicLoading.show({ template: 'Loading...' });
            $scope.authObj.$signInWithEmailAndPassword(usuario.email, usuario.password)
                .then(function(firebaseUser) {
                    console.log("Signed in as:", firebaseUser.uid);
                    $ionicLoading.hide();
                    $state.go('resultado-flexivel');
                }).catch(function(error) {
                    $ionicLoading.hide();
                    var alertPopup = $ionicPopup.alert({
                        title: 'Falha no Login',
                        template: error.message
                    });
                });
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
                    $state.go('login');

                }).catch(function(error) {

                    $ionicLoading.hide();

                    var alertPopup = $ionicPopup.alert({
                        title: 'Falha no Registro',
                        template: error.message
                    });
                });

        }

    });
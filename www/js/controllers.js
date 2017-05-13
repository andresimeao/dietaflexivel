app.controller('CalculoFlexivelCtrl',
<<<<<<< HEAD
  function($scope, $state, CalculoServices){
      $scope.usuario = {};
      
    $scope.showAtividade = function(){
        $state.go('explicacao-atividade');
    }
    $scope.showObjetivo = function(){
        $state.go('explicacao-objetivo');
    }
    
    $scope.calcular = function(usuario){
        //alterar sexo manualmente porque ainda nao foi implementado o cadasto para pegar o sexo do usuario
        usuario.sexo = 'M';
        var resultado = CalculoServices.calcular(usuario);
        if(resultado == null){
            $scope.teste = 'erro';
        }else{
            $scope.teste = Math.round(resultado);
        }
        //$state.go('resultado-flexivel');
    }
    
});
app.controller('DuvidasCtrl',
    function($scope, $state, $ionicHistory){
=======
    function($scope, $state, $firebaseAuth) {
        var firebaseUser = $firebaseAuth().$getAuth();
        $scope.teste = firebaseUser.uid;

        $scope.calcular = function() {
            $state.go('app.resultado-flexivel');
        }
>>>>>>> 030a531f5b32111ec04fbefbb3655ecafa126d20

    });
app.controller('DuvidasCtrl',
    function($scope, $state, $ionicHistory) {
        $scope.showAtividade = function() {
            $state.go('explicacao-atividade');
        }
        $scope.showObjetivo = function() {
            $state.go('explicacao-objetivo');
        }
        $scope.voltar = function() {
            $ionicHistory.goBack(-1);
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
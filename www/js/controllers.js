app.controller('CalculoFlexivelCtrl',
  function($scope, $state){
    $scope.showAtividade = function(){
        $state.go('explicacao-atividade');
    }
    $scope.showObjetivo = function(){
        $state.go('explicacao-objetivo');
    }
    $scope.calcular = function(){
        $state.go('resultado-flexivel');
    }

});
app.controller('DuvidasCtrl',
    function($scope, $state, $ionicHistory){

});

app.controller('ResultadoFlexivelCtrl',
  function($scope, $state){  
});

app.controller('TelaInicialCtrl',
  function($scope, $state){
    $scope.showLogin = function(){
        $state.go('login');
    }
    $scope.showCadastro = function(){
        $state.go('cadastro');
    }
});

app.controller('LoginCtrl',
  function($scope, $state,$ionicHistory){
      $scope.login = function(){
          $state.go('resultado-flexivel');
      }  
});

app.controller('CadastroCtrl',
  function($scope, $state,$ionicHistory){
      $scope.cadastrar = function(){
          $state.go('calculo-flexivel');
      }  
});

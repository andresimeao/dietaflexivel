app.controller('CalculoFlexivelCtrl',
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

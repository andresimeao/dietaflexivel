app.controller('CalculoFlexivelCtrl',
  function($scope, $state, $ionicHistory){
    $scope.showAtividade = function(){
        $state.go('explicacao-atividade');
    }
    $scope.showObjetivo = function(){
        $state.go('explicacao-objetivo');
    }
    
});
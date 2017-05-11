app.factory("AdicionarUsuario", function($firebaseObject) {
    return {
        addUsuario: function(firebaseUser, usuario) {

            var ref = firebase.database().ref('usuarios/' + firebaseUser.uid);

            var obj = $firebaseObject(ref);
            obj.email = firebaseUser.email;
            obj.nome = usuario.nome;
            obj.sexo = usuario.sexo;
            obj.$save().then(function(ref) {
                ref.key === obj.$id; // true
                console.log('Usuário criado na base de dados');
            }, function(error) {
                console.log("Erro:", error);
            });
        }
    }
});
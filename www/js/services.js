app.factory('CalculoServices', function() {

    return {
        calcular: function(usuario) {
            // calculo se for Homem
            if (usuario.sexo == 'M') {
                var resultado = (10 * usuario.peso) + (6.25 * (usuario.altura * 100)) - (5 * usuario.idade) + 5;
                //atividade-sedentario
                if (usuario.atividadeFisica == '1') {
                    return resultado * 1.2;
                }
                //fim atividade-sedentario
                //atividade-leve
                if (usuario.atividadeFisica == '2') {
                    return resultado * 1.375;
                }
                //fim atividade-level
                //atividade-ativo 
                if (usuario.atividadeFisica == '3') {
                    return resultado * 1.55;
                }
                //fim atividade-ativo
                // atividade muito-ativo
                if (usuario.atividadeFisica == '4') {
                    return resultado * 1.725;
                }
            }
            // fim calculo se for homem
            // calculo se for mulher
            if (usuario.sexo == 'F') {
                var resultado = (10 * usuario.peso) + (6.25 * (usuario.altura * 100)) - (5 * usuario.idade) - 161;
                //atividade-sedentario
                if (usuario.atividadeFisica == '1') {
                    return resultado * 1.2;
                }
                //fim atividade-sedentario
                //atividade-leve
                if (usuario.atividadeFisica == '2') {
                    return resultado * 1.375;
                }
                //fim atividade-level
                //atividade-ativo 
                if (usuario.atividadeFisica == '3') {
                    return resultado * 1.55;
                }
                //fim atividade-ativo
                // atividade muito-ativo
                if (usuario.atividadeFisica == '4') {
                    return resultado * 1.725;
                }
            }
            return null;
        }

    }
});

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
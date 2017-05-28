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

app.factory("DietaDashboard", function() {
    return {

        calcularCaloriaDiarias: function() {
            var el = document.getElementById('graph'); // get canvas

            var options = {
                percent: el.getAttribute('data-percent'),
                size: el.getAttribute('data-size') || 155, //tamanho
                lineWidth: el.getAttribute('data-line') || 17, // grossura da linha
                rotate: el.getAttribute('data-rotate') || 0
            }

            var canvas = document.getElementById('canvas');

            var span = document.getElementById('span');
            span.textContent = options.percent + ' kcal';

            function setpixelated(context) {
                context['imageSmoothingEnabled'] = false; /* standard */
                context['mozImageSmoothingEnabled'] = false; /* Firefox */
                context['oImageSmoothingEnabled'] = false; /* Opera */
                context['webkitImageSmoothingEnabled'] = false; /* Safari */
                context['msImageSmoothingEnabled'] = false; /* IE */
            }

            var ctx = canvas.getContext('2d');
            setpixelated(ctx);
            canvas.width = canvas.height = options.size;

            el.appendChild(span);
            el.appendChild(canvas);

            ctx.translate(options.size / 2, options.size / 2); // change center
            ctx.rotate((-1 / 2 + options.rotate / 180) * Math.PI); // rotate -90 deg

            //imd = ctx.getImageData(0, 0, 240, 240);
            var radius = (options.size - options.lineWidth) / 2;

            var drawCircle = function(color, lineWidth, percent) {
                percent = Math.min(Math.max(0, percent || 1), 1);
                ctx.beginPath();
                ctx.arc(0, 0, radius, 0, Math.PI * 2 * percent, false);
                ctx.strokeStyle = color;
                ctx.lineCap = 'round'; // butt, round or square: se a linha é arredondada
                ctx.lineWidth = lineWidth;
                ctx.stroke();
            };

            drawCircle('#efefef', options.lineWidth, 100 / 100);
            drawCircle('#4e8ef7', options.lineWidth, options.percent / 100);
        }
    }
});
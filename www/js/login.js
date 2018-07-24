$(document).ready(function(){

      
      //localStorage.setItem('server_auth',"https://financeiro.doctum.edu.br/sicof/usuarios/logintoken.php" );

      //Verificando se existem dados de usuario e senha salvos
      if(localStorage.getItem('login_lembreme') == 1){

        $('#input-lembreme').prop('checked','1');
        $('#username').val(localStorage.getItem('login_username'));
        $('#password').val(localStorage.getItem('login_password'));

      }

      // Fazendo login
      $('#login').click( function(e) {

        var username = $('#username').val();
        var password = $('#password').val();
            //Escondendo botao no inicio do processo de login
            $('#button').hide();
            $('#progress').show();
            //Verificando o Lembre-se e armazenando os dados de login e senha
            if($('#input-lembreme').prop('checked')){
              console.log('marcado' );
              localStorage.setItem('login_username', username);
              localStorage.setItem('login_password', password);
              localStorage.setItem('login_lembreme', 1);

            }
            else{
              localStorage.setItem('login_lembreme', 0);
            }

            $.post(
              localStorage.getItem('server_auth'),
              {
                'username'  : username,
                'password'  : password,
                'action'    : 'LOGIN'
              },
              function(ret){
                //Se retornar um token valido de acesso
                if(ret.token){
                  document.addEventListener('deviceready', function () {
                    // Salvando a tag de usuario.
                    window.plugins.OneSignal.sendTag("user", username);
                  }, false);

                  //ons.notification.alert('Login efetuado com sucesso.');
                  //Armazenando o token
                  localStorage.setItem('token',ret.token);

                  window.location.href = './app.html';
                }
                else{
                  ons.notification.alert(ret.erro);
                }
                //Exibindo o botao se o login der errado
                $('#button').show();
                $('#progress').hide();
              },
              'json'
            ).fail(function() {
              alert( "error" );
          });  
      });

    });
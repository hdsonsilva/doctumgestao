function login(usuario, senha){
        var username = usuario ;
        var password = senha ;
        var ok = 0 ;
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

            $.ajax({
              type: 'POST',
              url : localStorage.getItem('server_auth'),
              data: {
                'username'  : username,
                'password'  : password,
                'action'    : 'LOGIN'
              },
              success:function(ret){
                //Se retornar um token valido de acesso

                if(ret.token){

                  document.addEventListener('deviceready', function () {
                    // Salvando a tag de usuario.
                    window.plugins.OneSignal.sendTag("user", username);
                  }, false);

                  //ons.notification.alert('Login efetuado com sucesso.');
                  //Armazenando o token
                  localStorage.setItem('token',ret.token);
                  
                  ok  = 1 ;
                }
                else{
                  ons.notification.alert(ret.erro);
                }
                //Exibindo o botao se o login der errado
                $('#button').show();
                $('#progress').hide();
              },
              dataType:'json',
              async:false
          }); 

        return ok ;
}
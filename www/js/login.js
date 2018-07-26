function login(usuario, senha, async){
        var username = usuario ;
        var password = senha ;
        var ok = 0 ;
            
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
                  auth_check  =1 ;
                  
                  ons.notification.toast('Login efetuado com sucesso.', {timeout: 3000});
                  // Salvando a tag de usuario.
                  window.plugins.OneSignal.sendTag("user", localStorage.getItem("login_username"));
                  //Armazenando o token
                  localStorage.setItem('token',ret.token);
                  
                  ok  = 1 ;
                }
                else{
                  auth_check = -1 ;
                }
              
              },
              dataType:'json',
              async:async
          }); 

        return ok ;
}
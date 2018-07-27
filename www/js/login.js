function login(usuario, senha, app_){
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
                ons.notification.alert(JSON.stringify(ret));
                if(ret.token){
                  auth_check  = 1 ;
                  
                  if(app_ == 'index')
                    ons.notification.toast('Login efetuado com sucesso.', {timeout: 3000});
                   //Armazenando o token
                  localStorage.setItem('token',ret.token);
                  localStorage.setItem('sys_nome',ret.nome);
                  localStorage.setItem('sys_email',ret.email);
                  localStorage.setItem('sys_username',ret.usuario);
                  
                  // Salvando a tag de usuario. 
                  //document.addEventListener('deviceready', function () {
                  //  window.plugins.OneSignal.sendTag("user", localStorage.getItem("login_username"));
                  // }, false);
                  
                  ok  = 1 ;

                }
                else{
                  if(app_ == 'app'){
                    window.location.href = './index.html';
                  }

                  auth_check = -1 ;
                
                }
              
              },
              dataType:'json',
              async:false
          }); 

        return ok ;
}
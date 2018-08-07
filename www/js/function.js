function abrirURL( pagina ){
      if(debug == 1){
        window.open(pagina+"?token="+ localStorage.getItem("token") );
      }
      else{
        navigator.app.loadUrl(pagina+"?token="+localStorage.getItem("token") , { openExternal: true });
      }
    }

    function showModal(controle) {
      var modal = document.querySelector('ons-modal');
      if(controle == 'show'){
        modal.show();
      
        setTimeout(function() {
          modal.hide();
        }, 12000);
      }
      else{
        modal.hide();
      }
    }

    
    function verifica_auth(controle){
      $.post(
            localStorage.getItem('server_auth'),
              {
                'token'     : localStorage.getItem('token'),
                'action'    : 'VALIDATOKEN'
              },
              function(ret){
                if(ret.token){
                  //OK! o token é valido
                  //ons.notification.alert(localStorage.getItem('login_username'));
                }
                else{
                 
                  login( localStorage.getItem('login_username'),  localStorage.getItem('login_password'), 'app');
                  
                }
                //Exibindo o botao se o login der errado
                $('#button').show();
                $('#progress').hide();
              },
              'json'
            );
    }
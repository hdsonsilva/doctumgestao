function exibeMensagem(page){
  if(page == 'tarefas'){
    $('#pending-list').append("<ons-list class='buscar' id='reloadpending'><ons-list-item modifier='nodivider'><p style='text-align:center;width:100%'><label class='center' for='inner-highlight-input'>Clique  no botão <ons-icon icon='fa-undo'></ons-icon> para atualizar  </label></p></ons-list-item></ons-list-item></ons-list>");
    //$('#reloadpending').unbind();
    /*$('#reloadpending').click(function(){
      buscaAcoes();
    });*/
  }
}

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

    function removeItem(dados){
      //ons.notification.alert(dados.idacess_ws_acao);
       showModal('show');
      $.ajax({
              type: 'POST',
              url : server_action,
              cache: false, //Nao fazer cache
              timeout: 10000, //10 segundos
              data: {
                'token'  : localStorage.getItem('token'),
                'action' : 'OCULTAR',
                'idacao' : dados.idacess_ws_acao
              },
              success:function(ret){
                showModal('hide');
              },
              error:function(e, erro){
                //Se retornar um token valido de acesso
                showModal('hide');
                ons.notification.alert("Ocorreu um erro ao processar sua solicitação. Atualize a lista e verifique se a ação foi concluida.");
              },
              dataType:'json',
              async:true //Não esperar retorno para continuar codigo
          }); 
    }
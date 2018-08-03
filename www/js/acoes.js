function buscaAcoes(){
	showModal('show');
	$.ajax({
              type: 'POST',
              url : server_action,
              cache: false, //Nao fazer cache
              timeout: 10000, //10 segundos
              data: {
                'token'  : localStorage.getItem('token'),
                'action' : 'LISTAR'
              },
              beforeSend: function(){
                $('#pending-list').html('');
              },
              success:function(ret){
                //Se retornar um token valido de acesso
                $('#pending-list').html('');
                if(ret.dados){  
                  //Limpando lista de tarefas           
                  
                  //Criando nova lista de tarefas que acabaram de ser retornadas
                  for ( i in ret.dados){
                    myApp.services.tasks.create(ret.dados[i]);
                  }

                  
                }
                else{
                  $('#pending-list').html("<ons-list id='listaNotifications'><ons-list-item modifier='nodivider'><label class='center' for='inner-highlight-input'><ons-icon icon='fa-thumbs-down'></ons-icon>Nenhuma tarefa localizada</label></ons-list-item></ons-list-item></ons-list>");
                  ret = null;
                
                }

                showModal('hide');
                //////////////////////// Recarregando pagina///////////////////////////////
                $('#buttonreload').click(function(){
                  buscaAcoes();
                });
              
              },
              error:function(e, erro){
                //Se retornar um token valido de acesso
                if(erro == 'timeout'){
                  $('#pending-list').html("<ons-list id='listaNotifications'><ons-list-item modifier='nodivider'><label class='center' for='inner-highlight-input'><ons-icon icon='fa-thumbs-down'></ons-icon> Tempo de conexão expirou</label></ons-list-item></ons-list-item></ons-list>");
                }
                else{
                  $('#pending-list').html("<ons-list id='listaNotifications'><ons-list-item modifier='nodivider'><label class='center' for='inner-highlight-input'><ons-icon icon='fa-thumbs-down'></ons-icon> Ocorreu um erro ao processar<br>sua solicitação.<br>Tente novamente mais tarde.</label></ons-list-item></ons-list-item></ons-list>");
                }

                 //////////////////////// Recarregando pagina///////////////////////////////
                $('#buttonreload').click(function(){
                  buscaAcoes();
                });
              
              },
              dataType:'json',
              async:true //Não esperar retorno para continuar codigo
          }); 
}
function buscaAcoes(){
	showModal('show');
	$.ajax({
              type: 'POST',
              url : server_action,
              data: {
                'token'  : localStorage.getItem('token'),
                'action' : 'LISTAR'
              },
              success:function(ret){
                //Se retornar um token valido de acesso
                
                if(ret.dados){  
                  //Limpando lista de tarefas           
                  $('#pending-list').html('');
                  //Criando nova lista de tarefas que acabaram de ser retornadas
                  for ( i in ret.dados){
                    myApp.services.tasks.create(ret.dados[i]);
                  }
                  
                }
                else{
                  
                  ret = null;
                
                }

                showModal('hide');
              
              },
              dataType:'json',
              async:true
          }); 
}
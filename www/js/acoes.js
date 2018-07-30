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
                  //ons.notification.alert(JSON.stringify(myApp.services));
                  
                  
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
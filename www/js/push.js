///////////////// PUSH NOTIFICATION ////////////////////////////////////////
     document.addEventListener('deviceready', function () {
        //Desativar botao voltar
        document.addEventListener("backbutton", function(){navigator.app.exitApp();} , false);

        // Enable to debug issues.
        // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
        
        if(debug == 1){
          ons.notification.alert('iniciando push');
        }

        /////////////////// ACAO EXECUTADA QUANDO SE CLICA NA NOTIFICACAO PUSH////////
        var notificationOpenedCallback = function(jsonData) {
           
          if(debug == 1){
            ons.notification.alert(JSON.stringify(jsonData.notification.payload.additionalData));
          }
          
        //Teste de como pegar dados s no push
        //localStorage.setItem('pushInfo',jsonData.notification.payload.additionalData.sessao);

          document.querySelector('#myNavigator').pushPage('html/details_task.html',
            {
              animation: 'lift',
              data: {
                element:  jsonData.notification.payload.additionalData
              }
            }
          );
          
          if(debug == 1){
            ons.notification.alert('final');
          }
        }
        
        window.plugins.OneSignal
          .startInit(localStorage.getItem('idonesignal'))
          .handleNotificationOpened(notificationOpenedCallback  )
          .endInit();

        window.plugins.OneSignal.sendTag("user", localStorage.getItem("login_username").toUpperCase() );

          }, false);
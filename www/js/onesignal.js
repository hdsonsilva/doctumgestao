document.addEventListener('deviceready', function () {
	  // Enable to debug issues.
	  // window.plugins.OneSignal.setLogLevel({logLevel: 4, visualLevel: 4});
	  
	  var notificationOpenedCallback = function(jsonData) {
	    //console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
	  };

	  window.plugins.OneSignal
	    .startInit("e259628e-f324-44a2-a029-09d47774ef6d")
	    .handleNotificationOpened(notificationOpenedCallback)
	    .endInit();
	}, false);
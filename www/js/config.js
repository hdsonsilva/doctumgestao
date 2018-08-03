//var server = 'https://financeiro.doctum.edu.br/sicof/webservice/';
var server = "http://192.168.0.105/financeiro/sicof/webservice/";

var server_auth = server + 'logintoken.php';
var server_action = server + 'acoes.php';

var idonesignal = "e259628e-f324-44a2-a029-09d47774ef6d";
var debug = 0 ; 

localStorage.setItem('app_timeverify_auth', 30000);
localStorage.setItem('server_auth', server_auth);
localStorage.setItem('idonesignal', idonesignal);
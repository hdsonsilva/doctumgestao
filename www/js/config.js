var server = 'https://financeiro.doctum.edu.br/sicof/webservice/';
//var server = "http://192.168.11.218/financeiro/sicof/webservice/";

var server_auth = server + 'logintoken.php';
var server_action = server + 'acoes.php';

var idonesignal = "e259628e-f324-44a2-a029-09d47774ef6d";
var debug = 0 ; 


var controle_mensagem_atualizar = 1;

localStorage.setItem('app_timeverify_auth', 60000);
localStorage.setItem('server_auth', server_auth);
localStorage.setItem('idonesignal', idonesignal);
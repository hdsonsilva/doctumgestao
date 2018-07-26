//var server = 'https://financeiro.doctum.edu.br/';
var server = "http://localhost/financeiro/";
var server_auth = server + 'sicof/usuarios/logintoken.php';
var idonesignal = "e259628e-f324-44a2-a029-09d47774ef6d";
var debug = 1 ;

localStorage.setItem('app_timeverify_auth', 30000);
localStorage.setItem('server_auth', server_auth);
localStorage.setItem('idonesignal', idonesignal);
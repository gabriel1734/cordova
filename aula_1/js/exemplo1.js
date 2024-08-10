function carregou() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML = 'A página carregou!';

    document.addEventListener('deviceready', dispositivoPronto, true);
    document.addEventListener('pause', onPause, true);
    document.addEventListener('resume', onResume, false);
}

function dispositivoPronto() {
    var campoSaida = document.getElementById('saida');
    campoSaida.innerHTML += '<br>O dispositivo está pronto!';

}  

function onPause() {
    document.getElementById('saida').innerHTML += '<br>A página está pausada!';
}

function onResume() {
    document.getElementById('saida').innerHTML += '<br>A página retorno!';
}
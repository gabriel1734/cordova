document.addEventListener('deviceready', onDeviceReady, false);

let n1, n2;

function onDeviceReady() {
    var botao = document.getElementById('botao');
    botao.addEventListener('click', verifica);
    gerarOperacaoAleatoria();
}

function gerarOperacaoAleatoria() {
    // Gera dois números aleatórios entre 1 e 9
    n1 = Math.floor(Math.random() * 9) + 1;
    n2 = Math.floor(Math.random() * 9) + 1;

    document.getElementById('n1').innerHTML = n1;
    document.getElementById('n2').innerHTML = n2;

    // Limpa o campo de resposta para nova entrada
    document.getElementById('campo').value = '';
}

function verifica() {
    var campo = document.getElementById('campo');
    var respostaDigitada = parseInt(campo.value);

    // Verifica se o campo está preenchido
    if (campo.value !== '') {
        // Calcula a resposta correta
        var respostaCorreta = n1 + n2;

        // Se o usuário acertar
        if (respostaDigitada === respostaCorreta) {
            navigator.notification.alert(
                'Você acertou!', // Mensagem
                alertDismissed,   // Função de callback
                'Resultado',      // Título do alerta
                'OK'              // Texto do botão
            );
        }
    }
}

function alertDismissed() {
    // Gera uma nova operação quando o alerta for fechado
    gerarOperacaoAleatoria();
}


async function getPost(){
    var payload = {
        method: "GET",
      };
    let id = document.getElementById('postNumber')
    req = await fetch(`https://jsonplaceholder.typicode.com/posts/${id.value}`, payload)
    .then(T => T.json())

    document.getElementById('title').innerText = req.title
    document.getElementById('body').innerText = req.body
}

function limparCampos() {
    document.getElementById('postNumber').value = '';
    document.getElementById('title').innerText = '';
    document.getElementById('body').innerText = '';
}

function simularScrollEnd() {
    let timeout;
    window.addEventListener('scroll', () => {
        if (timeout) {
            clearTimeout(timeout);
        }
        timeout = setTimeout(() => {
            // Verificar se o usuário chegou ao final da página
            const distanciaDoTopo = window.scrollY || window.pageYOffset;
            const alturaDaTela = window.innerHeight;
            const alturaDoDocumento = document.documentElement.scrollHeight;

            if (distanciaDoTopo + alturaDaTela >= alturaDoDocumento - 1) {
                limparCampos();
            }
        }, 100); // Espera 100 ms após a rolagem parar
    });
}

// Inicializa a simulação de scrollend
simularScrollEnd();


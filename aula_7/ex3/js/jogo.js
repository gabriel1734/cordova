import inicio from './modulo.js'; // Se houver funcionalidades extras no módulo.js, você pode usá-las

document.addEventListener('deviceready', onDeviceReady, false); // Cordova

async function onDeviceReady() {
    pronto();
}

async function pronto() {
    await inicio(); // Executa funções necessárias do módulo

    // Cria o app PixiJS
    const app = new PIXI.Application({
        width: window.innerWidth, 
        height: window.innerHeight,
        backgroundColor: 0x1099bb, // Cor de fundo
    });
    document.body.appendChild(app.view); // Adiciona o canvas do PixiJS à página

    // Carrega a textura do coelho
    const texture = PIXI.Texture.from('https://pixijs.com/assets/bunny.png'); // URL da imagem do coelho
    
    // Cria um sprite usando a textura
    const bunny = new PIXI.Sprite(texture);

    // Define a posição inicial do coelho no centro da tela
    bunny.anchor.set(0.5);
    bunny.x = app.screen.width / 2;
    bunny.y = app.screen.height / 2;

    // Adiciona o coelho à cena
    app.stage.addChild(bunny);

    // Função para rodar o coelho continuamente
    app.ticker.add(() => {
        bunny.rotation += 0.1; // Gira o coelho
    });
}

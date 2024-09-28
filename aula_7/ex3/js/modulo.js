export default async function inicio()
{
    // Create a PixiJS application.
    const app = new PIXI.Application();

    // Intialize the application.
    await app.init({ background: '#1099bb', resizeTo: window });

    // Then adding the application's canvas to the DOM body.
    document.body.appendChild(app.canvas);

    const texture = await PIXI.Assets.load('img/bunny.png');

    const bunny = new PIXI.Sprite(texture);

    app.stage.addChild(bunny);

    bunny.anchor.set(0.5)

    bunny.x = app.screen.width / 2
    bunny.y = app.screen.height / 2

    
}  

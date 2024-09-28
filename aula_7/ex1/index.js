<!DOCTYPE html>
<html>
    <head>
        <meta charset="utf-8">
        <meta name="format-detection" content="telephone=no">
        <meta name="msapplication-tap-highlight" content="no">
        <meta name="viewport" content="initial-scale=1, width=device-width, viewport-fit=cover">
        <meta name="color-scheme" content="light dark">
        <title>Soma</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">
    </head>
    <body>
        <div class="container-fluid">
            <div class="row m-3">
                <div class="col offset-3">
                    <!-- Exibição da conta com dois números aleatórios -->
                    <p class="display-5" id="conta">
                        <span id="n1"></span> + <span id="n2"></span> = 
                    </p>
                </div>
                <div class="col">
                    <!-- Campo de resposta com formatação do Bootstrap -->
                    <div class="form-floating mb-3">
                        <input type="number" class="form-control" id="campo" placeholder="Digite a resposta">
                        <label for="campo">Resposta:</label>
                    </div>
                </div>
            </div>
            <div class="row"></div>
                <div class="col offset-6">
                    <!-- Botão de verificação -->
                    <button type="button" class="btn btn-primary" id="botao">Verificar</button>
                </div>
            </div>
        </div>
        <!-- Inclusão dos scripts necessários -->
        <script src="cordova.js"></script>
        <script src="js/index.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-YvpcrYf0tY3lHB60NNkmXc5s9fDVZLESaAA55NDzOxhy9GkcIdslK1eN7N6jIeHz" crossorigin="anonymous"></script>
    </body>
</html>

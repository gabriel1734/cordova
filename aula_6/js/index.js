document.addEventListener("deviceready", function() {
    async function buscarAPI(e) {
        e.preventDefault();

        navigator.geolocation.getCurrentPosition(success, error);

        function success(position) {
            const lat = position.coords.latitude;
            const lon = position.coords.longitude;

            const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current_weather=true&timezone=America%2FSao_Paulo`;

            fetch(url)
                .then(response => response.json())
                .then(data => {
                    const selectedData = [];
                    const tempChecked = document.getElementById('temp').checked;
                    const humidityChecked = document.getElementById('humidity').checked;
                    const precipitationChecked = document.getElementById('precipitation').checked;
                    const windChecked = document.getElementById('wind').checked;

                    if (tempChecked && data.current_weather.temperature !== undefined) {
                        selectedData.push(`Temperatura: ${data.current_weather.temperature}°C`);
                    }
                    if (humidityChecked && data.current_weather.humidity !== undefined) {
                        selectedData.push(`Umidade: ${data.current_weather.humidity}%`);
                    }
                    if (precipitationChecked && data.current_weather.precipitation !== undefined) {
                        selectedData.push(`Precipitação: ${data.current_weather.precipitation} mm`);
                    }
                    if (windChecked && data.current_weather.windspeed !== undefined) {
                        selectedData.push(`Velocidade do vento: ${data.current_weather.windspeed} km/h`);
                        selectedData.push(`Direção do vento: ${data.current_weather.winddirection}°`);
                    }

                    if (selectedData.length > 0) {
                        document.getElementById('card_tmp').innerHTML = selectedData.join(',<br>');
                    } else {
                        document.getElementById('card_tmp').innerHTML = 'Nenhum dado selecionado disponível.';
                    }

                    document.getElementById('card_tmp').innerHTML += `<br>Latitude:  ${lat}<br>Longitude: ${lon}`

                })
                .catch(error => {
                    console.error('Erro ao buscar dados:', error);
                    document.getElementById('card_tmp').innerHTML = 'Erro ao buscar dados.';
                });
        }

        function error(err) {
            console.error('Erro ao obter a localização:', err);
            document.getElementById('card_tmp').textContent = 'Erro ao obter a localização.';
        }
    }

    document.querySelector('form').onsubmit = buscarAPI;
}, false);
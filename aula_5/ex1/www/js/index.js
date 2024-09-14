document.addEventListener('deviceready', onDeviceReady, false);

let page = 1;
const limit = 10;
const apiUrl = 'https://jsonplaceholder.typicode.com/photos?_limit=' + limit + '&_page=';

function onDeviceReady() {
    loadCards();
    window.addEventListener('scroll', handleScroll);
}

function loadCards() {
    fetch(apiUrl + page)
        .then(response => response.json())
        .then(data => {
            const container = document.getElementById('card-container');
            data.forEach(item => {
                const card = createCard(item.url, item.title);
                container.appendChild(card);
            });
           page = Math.floor(Math.random() * (49 - 0 + 1)) + min;;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
}

function createCard(imgSrc, title) {
    const card = document.createElement('div');
    card.className = 'card';

    const img = document.createElement('img');
    img.src = imgSrc;
    img.alt = title;
    card.appendChild(img);

    const cardTitle = document.createElement('div');
    cardTitle.className = 'card-title';
    cardTitle.textContent = title;
    card.appendChild(cardTitle);

    return card;
}

function handleScroll() {
    const nearBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight - 100;
    if (nearBottom) {
        loadCards();
    }
}

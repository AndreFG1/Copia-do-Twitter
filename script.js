// Simulação de tweets
let tweets = [];

// Função para exibir tweets
function renderTweets() {
    const tweetsSection = document.getElementById('tweetsSection');
    tweetsSection.innerHTML = '';

    tweets.forEach(tweet => {
        const tweetElement = document.createElement('div');
        tweetElement.classList.add('tweet');
        tweetElement.innerHTML = `<p>${tweet}</p>`;
        tweetsSection.appendChild(tweetElement);
    });
}

// Adicionando um tweet
document.getElementById('tweetForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const tweetText = document.getElementById('tweetText').value;
    if (tweetText.trim() !== '') {
        tweets.push(tweetText);
        renderTweets();
        document.getElementById('tweetText').value = '';
    }
});

// Inicialização - renderiza tweets existentes
renderTweets();

// URL de l'API
var url = 'https://script.googleusercontent.com/macros/echo?user_content_key=hnsGa6rSYSPXkUYlkm3XuCtZ69VoCwpGP7KdesGopDfgGh0DOxCtXSOB90AraJ7rK3dA9el77_hlBfK2oee7TFVhJSlJ66Kom5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBKcEhUaOfQkzAi4ED1KEh4GFyuvonGQTjdX4W7-u5fchGZlkFODr6sr-oLq2z5igTMJLCtZzjSjVOYfat7jjSDQU8jSVoOzxw&lib=MrvFYWg01m1V2WXlYdbuQCoQAT1r8vRmO';

// Variables pour le DOM
var citationElement = document.querySelector('.citation');
var auteurElement = document.querySelector('.auteur');
var desElement = document.querySelector('.description');
var photoElement = document.querySelector('.photo');
var citations = [];

// const photoElement =`<img src="..img/${photo}.jpg" alt="${auteur}">`;
$('#refresh').on('click', function() {
    location.reload();
});
// Fonction pour récupérer les citations
function fetchCitations() {
    $.ajax({
        type: 'GET',
        url: url,
        dataType: 'json',
        success: function(data) {
            console.log(data);
            citations = data;
            displayRandomQuote();
        },
        error: function() {
            alert('Erreur du chargement des citations');
        }
    });
}

// Fonction pour afficher une citation aléatoire
function displayRandomQuote() {
    if (citations.length > 0) {
        var randomIndex = Math.floor(Math.random() * citations.length);
        var randomQuote = citations[randomIndex];
        citationElement.textContent = randomQuote.citation;
        auteurElement.textContent = randomQuote.auteur; 
        desElement.textContent = randomQuote.description;
        photoElement.src = `<img src="../img/${photo}.jpg" alt="${auteur}">`;

    }
}

// Mettre à jour la citation toutes les 20 secondes
setInterval(displayRandomQuote, 20000);

// Charger les citations au démarrage
fetchCitations();

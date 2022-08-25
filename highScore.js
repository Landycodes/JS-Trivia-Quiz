var nameInput = document.getElementById('initial');
var scoreBoard = document.getElementById('scoreboard');
var mainPage = document.getElementById('backhome');
var yourscore = document.getElementById('yourscore')
var savedName = document.getElementsByClassName('name')
var savedScore = document.getElementsByClassName('score')

//retrieves score and name data
var score = localStorage.getItem('score', score)
var storName = localStorage.getItem('name', storName)

//goes back to game
mainPage.addEventListener('click', function() {
    location.replace('./index.html')
});

//prints score and name to scoreboard
yourscore.innerText = score;
nameInput.innerText = storName;


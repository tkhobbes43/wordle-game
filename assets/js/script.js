let myDictionary = ['seattle', 'dallas', 'houston', 'chicago', 'tampa', 'atlanta']

let wins = 0;
let losses = 0;
let time = 10;

var wordGuess = document.querySelector(".word-guess"); 
var startGameButton = document.querySelector(".start-button");
var timerEl = document.querySelector(".timer-text");

var wordChosen = []

startGameButton.addEventListener("click" , function() {
    function compare() {
        let randWord = Math.floor(Math.random()*myDictionary.length);
        wordGuess.textContent = myDictionary[randWord];
    };

function countdown () {
    var timeInterval = setInterval(function () {
        if (time > 1) {
            timerEl.textContent = time
            time--;
        } else if (time === 1) {
            timerEl.textContent = time
            time--;
        } else {
            timerEl.textContent = '';
            clearInterval(timeInterval);
        }
    }
    , 1000);
    

}


compare();

console.log(wordGuess.textContent);

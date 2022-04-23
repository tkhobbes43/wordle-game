let myDictionary = ['seattle', 'dallas', 'houston', 'chicago', 'tampa', 'atlanta']

let wins = 0;
let losses = 0;
let time = 10;

var wordGuess = document.querySelector(".word-guess"); 

var wordChosen = []

function compare() {
    let randWord = Math.floor(Math.random()*myDictionary.length);
    wordGuess.textContent = myDictionary[randWord];
};

compare();

console.log(wordGuess.textContent);

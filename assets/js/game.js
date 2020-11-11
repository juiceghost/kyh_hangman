/*
    HANGMAN SOURCE
    Daniel Orlovsky
    UNCC Coding Bootcamp 08/30/2017

    http://danorlovsky.tech/Articles/Javascript-Hangman-Tutorial
    
*/

'use strict';

var selectableWords =           // Word list
    [
        "CSHARP",
        "CPLUSPLUS",
        "RUBYONRAILS",
        "PYTHON",
        "JAVASCRIPT",
        "ANSIC",
        "COBOL",
        "FORTRAN",
        "VISUALBASIC",
        "COMPILER",
        "ALGORITHM",
        "QBASIC",
        "ASPNET",
        "FRAMEWORK",
    ];

const maxTries = 10;            // Maximum number of tries player has

var guessedLetters = [];        // Stores the letters the user guessed
var currentWordIndex;           // Index of the current word in the array
var guessingWord = [];          // This will be the word we actually build to match the current word
var remainingGuesses = 0;       // How many tries the player has left
var hasFinished = false;        // Flag for 'press any key to try again'     
var wins = 0;                   // How many wins has the player racked up

// 
let startButton = document.querySelector('div.row>div:nth-child(2)>h2');
let hangmanImgEl = document.querySelector('#hangmanImage');
let totalWinsEl = document.querySelector('#totalWins');
let currentWordEl = document.querySelector('#currentWord');
let remainingGuessesEl = document.querySelector('#remainingGuesses');
let guessedLettersEl = document.querySelector('#guessedLetters');
// Game sounds
var keySound = new Audio('./assets/sounds/typewriter-key.wav');
var winSound = new Audio('./assets/sounds/you-win.wav');
var loseSound = new Audio('./assets/sounds/you-lose.wav');
// document.querySelector('div.row>div:nth-child(2)>h2')

startButton.addEventListener('click', startGame);

document.addEventListener('keypress', guessLetter);

// Todo version 2:
// låt användaren enbart gissa bokstäver.

// Checks for a win by seeing if there are any remaining underscores in the guessingword we are building.

// skriv en funktion checkWin som kollar om det är några underscores i guessingWord
function checkWin() {
    // kolla i guessingWord efter understreck
    if (!guessingWord.includes('_')) {
        // player has won the game!
        hasFinished = true;
        document.querySelector('#youwin-image').style="display: block"
        updatePlayAgain();
    } else {
        return
    }
    //return !guessingWord.includes('_');
}

function checkLose() {
    if (remainingGuesses === 0) {
        //document.querySelector('#pressKeyTryAgain').style="display: block"
        hasFinished = true;
        updatePlayAgain()
        document.querySelector('#gameover-image').style="display: block"
    }
}
function updatePlayAgain() {
    if (hasFinished) {
        // the game is over
        document.querySelector('#pressKeyTryAgain').style="display: block"
    } else {
        document.querySelector('#pressKeyTryAgain').style=""
    }
}
function guessLetter(e) {
    if (hasFinished) {
        startGame()
    } else {
    let currentGuessedLetter = e.key.toUpperCase();
    let hasUserAlreadyGuessedThisLetter = guessedLetters.includes(currentGuessedLetter)
    if (hasUserAlreadyGuessedThisLetter) {
        // spelaren har gissat samma bokstav 2 ggr
        return;
    } else {
        // spelaren har gissat bokstaven för första gången
        guessedLetters.push(currentGuessedLetter)
    }

    const indexOfFirst = selectableWords[currentWordIndex].indexOf(currentGuessedLetter);
    if (indexOfFirst > -1) {
        guessingWord[indexOfFirst] = currentGuessedLetter;
        // bokstav hittad!
        const indexOfSecond = selectableWords[currentWordIndex].indexOf(currentGuessedLetter, indexOfFirst + 1);
        if (indexOfSecond > -1) {
            guessingWord[indexOfSecond] = currentGuessedLetter;
        }
        updateCurrentWord();


    } else {
        console.log("end of function: " + guessedLetters)
        remainingGuesses = remainingGuesses - 1;
        updateGuessesRemaining();
        updateLettersGuessed();
        updateHangmanImg();
    }
    checkWin();
    checkLose();
}
}

function updateCurrentWord() {
    currentWordEl.innerHTML = guessingWord.join("");
}

function updateHangmanImg() {
    let imgCount = 10 - remainingGuesses; // 0..10
    let srcString = "assets/images/" + imgCount + ".png"
    hangmanImgEl.src = srcString
}

function updateLettersGuessed() {
    guessedLettersEl.innerHTML = guessedLetters;
}

function updateGuessesRemaining() {
    remainingGuessesEl.innerHTML = remainingGuesses;
}

function startGame(e) {
    remainingGuesses = maxTries; // 10
    hasFinished = false;
    guessedLetters = [];
    currentWordIndex = randomWord(selectableWords); // 0..13 (?)
    let currentWordLength = selectableWords[currentWordIndex].length
    console.log(selectableWords[currentWordIndex])
    guessingWord = "_".repeat(currentWordLength).split("")
    updateCurrentWord();
    updateLettersGuessed()
    updateGuessesRemaining()
    updateHangmanImg();
    document.querySelector('#youwin-image').style=""
    updatePlayAgain()
    document.querySelector('#gameover-image').style=""

}

function randomWord(arr) {
    return Math.floor(Math.random() * arr.length);
}



// Updates the display on the HTML Page

// Updates the image depending on how many guesses



// Checks for a loss

// Makes a guess

// Event listener

/*
    HANGMAN SOURCE
    Daniel Orlovsky
    UNCC Coding Bootcamp 08/30/2017
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
let hangmanImg = document.querySelector('#hangmanImage');

// Game sounds
var keySound = new Audio('./assets/sounds/typewriter-key.wav');
var winSound = new Audio('./assets/sounds/you-win.wav');
var loseSound = new Audio('./assets/sounds/you-lose.wav');
// document.querySelector('div.row>div:nth-child(2)>h2')

startButton.addEventListener('click', startGame);

// Skriv en funktion som körs när vi klickar på Starta spelet-knappen (jag får icke ändra i .html-filen)
function startGame(e) {
    //console.log("GAME STARTED!")
    //console.log(e.target)
    // resetta spelets "state" till det urpsrungliga.
    remainingGuesses = maxTries; // 10
    hasFinished = false;
    guessedLetters = [];
    currentWordIndex = randomWord(selectableWords); // 0..13 (?)
    console.log(selectableWords[currentWordIndex])
}

function randomWord(arr) {
    // givet en array arr
    // slumpa fram ett (number) index i arrayen. 0 <= i < arr.length

    // vad är min desired range?
    // let myRandomNumber = Math.floor(Math.random() * arr.length);
    return Math.floor(Math.random() * arr.length);
    // should return an index
}

// Reset our game-level variables

// Updates the display on the HTML Page

// Updates the image depending on how many guesses

// Checks for a win by seeing if there are any remaining underscores in the guessingword we are building.

// Checks for a loss

// Makes a guess

// Event listener

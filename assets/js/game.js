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

document.addEventListener("keypress", guessLetter);

function guessLetter(e) {
    let currentGuessedLetter = e.key.toUpperCase();
    let hasUserAlreadyGuessedThisLetter = guessedLetters.includes(currentGuessedLetter)
    //console.log("Letter exists: " + hasUserAlreadyGuessedThisLetter)
    if (hasUserAlreadyGuessedThisLetter) {
        // spelaren har gissat samma bokstav 2 ggr
        return;
    } else {
        // spelaren har gissat bokstaven för första gången
        guessedLetters.push(currentGuessedLetter)
    }

    // selectableWords[currentWordIndex]
    // "TE"
    // kolla om cGL finns i current word
    const indexOfFirst = selectableWords[currentWordIndex].indexOf(currentGuessedLetter);
    if (indexOfFirst > -1) {
        guessingWord[indexOfFirst] = currentGuessedLetter;
        // bokstav hittad!
        //console.log("letter found at: " + indexOfFirst)
        //console.log(selectableWords[currentWordIndex][indexOfFirst])
        const indexOfSecond = selectableWords[currentWordIndex].indexOf(currentGuessedLetter, indexOfFirst + 1);
        if (indexOfSecond > -1) {
            guessingWord[indexOfSecond] = currentGuessedLetter;
        }
        updateCurrentWord();
        //console.log("second letter found at: " + indexOfSecond)
        //console.log(selectableWords[currentWordIndex][indexOfSecond])

    } else {
        // bokstav ej hittad


        // guessingWord = ['_', '_', ...] (TE)
        // använder chansar på T
        // om ja
        // in i lettersguessed
        // ej minska g remaining
        // bokstaven ska synas i currentword på rätt ställe(n)
        // (var det den sista bokstaven som saknades?) 

        // om nej gör vi nedan
        console.log("end of function: " + guessedLetters)

        remainingGuesses = remainingGuesses - 1;
        updateGuessesRemaining();
        updateLettersGuessed();
        updateHangmanImg();
    }
}
// skriv en funktion som skriver ut samma antal "_" som det finns
// tecken i ordet (currentword, det spelaren ska gissa)
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

// skriv en funktion som håller spelaren informerad om antal gissningar som finns kvar

// skriv en funktion som informerar spelaren om vilka bokstäven som redan gissats


// Skriv en funktion som körs när vi klickar på Starta spelet-knappen (jag får icke ändra i .html-filen)
// Reset our game-level variables
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
}

function randomWord(arr) {
    // givet en array arr
    // slumpa fram ett (number) index i arrayen. 0 <= i < arr.length

    // vad är min desired range?
    // let myRandomNumber = Math.floor(Math.random() * arr.length);
    return Math.floor(Math.random() * arr.length);
    // should return an index
}



// Updates the display on the HTML Page

// Updates the image depending on how many guesses

// Checks for a win by seeing if there are any remaining underscores in the guessingword we are building.

// Checks for a loss

// Makes a guess

// Event listener

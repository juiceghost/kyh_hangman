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

// Game sounds
var keySound = new Audio('./assets/sounds/typewriter-key.wav');
var winSound = new Audio('./assets/sounds/you-win.wav');
var loseSound = new Audio('./assets/sounds/you-lose.wav');

// Reset our game-level variables

//  Updates the display on the HTML Page

// Updates the image depending on how many guesses

// Checks for a win by seeing if there are any remaining underscores in the guessingword we are building.

// Checks for a loss

// Makes a guess

// Event listener

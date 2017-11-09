
var inquirer = require('inquirer');


function Word(startingWord) {
    this.wordToGuess = startingWord;
    this.lettersArray = [];
    this.guesses = [];

    this.printInfo = function() {
        console.log(this.lettersArray);
    }
    this.storeLetter = function() {
        for (var i = 0; i < startingWord.length; i++) {
            var letterObj = new Letter(startingWord[i])
            this.lettersArray.push(letterObj);
        }
    }
};

function Letter(singleLetter) {
    this.underscore = '_'
    this.actualLetter = singleLetter
    // this.guessed = true;
}
var count = 0;

var askForLetter = function() {
    if (count < 10) {

        inquirer.prompt([{
            name: 'guessLetter',
            type: 'input',
            message: 'Please enter a letter',

    //     }]).then(function(answers) {
            
    //     	var doesExist = false;

    //        // reorganize to be able to access in word
    //        // if guess was already made show message
    //     	if(guesses.indexOf(answers.guessLetter) > -1){
    //     		console.log("you've already guessed that!");
    //     		doesExist = true;

    //     	// if guess is correct, show letter in word, store letter in guesses array
    //     	}else if {
	   //               (gameWord.lettersArray.guessLetter === true) 
	   //           }
	   //               {
	   //                stringToPrint += gameWord.lettersArray[i].actualLetter	

	   //      // if letter is incorrect, store letter in guess array, increase count by 1, prompt to guess again
    //     	} else (gameWord.lettersArray[i].guessLetter === false){
	   //                  stringToPrint += ' _ '
	   //              };
    //     }
    //     // end of answers function
    // })
//     // end of if count
// };
// end of askForLetter function
// askForLetter();

function chooseRandomWord() {

    var possibleWord = ['happy', 'sad', 'frustrated', 'elated', 'excited', 'exausted', 'gleefull', 'tired', 'serious'];
    var randomizer = Math.floor(Math.random() * possibleWord.length);
    var startingWord = possibleWord[randomizer];

    var gameWord = new Word(startingWord);
    gameWord.printInfo();
    gameWord.storeLetter();
    gameWord.printInfo();
    var stringToPrint = ''
};
chooseRandomWord();

// console.log('Hang man!!!', stringToPrint);
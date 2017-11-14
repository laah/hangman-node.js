
var inquirer = require('inquirer');


function Word(startingWord) {
    this.wordToGuess = startingWord;
    this.lettersArray = [];
    this.guesses = [];

    this.printInfo = function() {
        // console.log(this.lettersArray);
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
    this.guessed = false;
}
var count = 1;

var askForLetter = function(wordGamePlaceholder) {
    if (count < 10) {

        inquirer.prompt([
        	{
	            name: 'guessLetter',
	            type: 'input',
	            message: 'Please enter a letter',
        	}        	
        ]).then(function(answers) {
            
        	var doesExist = false;
        	var stringToPrint = '';


        	// console.log('this is what the user guessed ---', answers.guessLetter);

        	for (var i = 0; i < wordGamePlaceholder.lettersArray.length; i ++) {
        		// console.log('this is each letter', wordGamePlaceholder.lettersArray[i].actualLetter)
        		if (wordGamePlaceholder.lettersArray[i].actualLetter === answers.guessLetter) {
        			console.log('Correct guess!');
        			wordGamePlaceholder.lettersArray[i].guessed = true;

        		}

        	}

        	for (var i = 0; i < wordGamePlaceholder.lettersArray.length; i ++) {
        		if (wordGamePlaceholder.lettersArray[i].guessed === true) {
        			stringToPrint += wordGamePlaceholder.lettersArray[i].actualLetter
        		} else {
        			stringToPrint += ' _ '
        		}
        	}


        	// code for checking if game is done!!!

        


        	console.log('Guess again! You\'ve used ' + count +' of your 10 guesses!', stringToPrint);
        	count++
			askForLetter(wordGamePlaceholder)
           
    	})
    }
    // end of if count
};
// end of askForLetter function


function chooseRandomWord() {

    var possibleWord = ['happy', 'sad', 'frustrated', 'elated', 'excited', 'exausted', 'gleefull', 'tired', 'serious'];
    var randomizer = Math.floor(Math.random() * possibleWord.length);
    var startingWord = possibleWord[randomizer];

    var gameWord = new Word(startingWord);
    // gameWord.printInfo();
    gameWord.storeLetter();
    gameWord.printInfo();

    askForLetter(gameWord);

};
chooseRandomWord();

// console.log('Hang man!!!', stringToPrint);
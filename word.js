var possibleWord = ['happy', 'sad', 'frustrated', 'elated', 'excited', 'exausted', 'gleefull', 'tired', 'serious'];
var randomizer = Math.floor(Math.random() * possibleWord.length);
var startingWord = possibleWord[randomizer];

exports.startingWord = startingWord;

// exports.word = {
// 	['happy', 'sad', 'frustrated', 'elated', 'excited', 'exausted', 'gleefull', 'tired', 'serious'];
// };
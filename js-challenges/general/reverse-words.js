/***
 * Given an input string, reverse the string word by word. A word is defined as a sequence of non-space characters.
 The input string does not contain leading or trailing spaces and the words are always separated by a single space.
 * @param phrase
 */
var solve = function(phrase) {
    var words = phrase.split(' ');
    var newWords = [];
    while(words.length > 0) {
        newWords.push(words.pop());
    }

    return newWords.join(' ');
}

module.exports = solve;
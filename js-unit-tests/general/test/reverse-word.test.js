var chai = require('chai');
var expect = chai.expect;

var reverseWords = require('../../../js-challenges/general/reverse-words');

describe('Reverse Words: Given an input string, reverse the string word by word', function () {
    it('should return "blue is sky the"', function () {
        var result = reverseWords("The sky is blue");
        expect(result).to.deep.equal("blue is sky The");
    });
});
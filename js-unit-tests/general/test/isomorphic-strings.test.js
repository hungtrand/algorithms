var chai = require('chai');
var expect = chai.expect;

var isIsomorphic = require('../../../js-challenges/general/isomorphic-strings');

describe('Isomorphic Strings: Given 2 strings, determine if they are isomorphic to each other', function () {

    it('should determine if two strings are isomorphic.', function () {
        var isomorphicTests = [
            ['egg', 'add', true],
            ['foo', 'bar', false],
            ['bar', 'foo', false],
            ['aab', 'xxy', true],
            ['gag', 'dad', true],
            ['aab', 'xyz', false],
            ['aabb', 'xxy', false]
        ];

        isomorphicTests.forEach(function (test) {
            expect(isIsomorphic(test[0], test[1])).to.equal(test[2]);
        });
    });
});
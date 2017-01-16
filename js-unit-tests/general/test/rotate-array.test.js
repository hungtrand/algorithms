var chai = require('chai');
var expect = chai.expect;

var rotateArray = require('../../../js-challenges/general/rotate-array');

describe('Rotate Array: Rotate an array of n elements to the right by k steps.', function () {
    it('should rotate 3 last elements to the front', function () {
        var result = rotateArray([1, 2, 3, 4, 5, 6, 7], 3);
        expect(result).to.deep.equal([5, 6, 7, 1, 2, 3, 4]);
    });
});
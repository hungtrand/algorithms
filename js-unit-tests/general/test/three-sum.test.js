var chai = require('chai');
var expect = chai.expect;
var _ = require('underscore');

var threeSum = require('../../../js-challenges/general/three-sum');

describe('3Sum: given a list of integers, return sets of triplets that have a sum equal to 0.', function () {
    it('should return two sets of triplets with sum of 0', function () {
        var tests = [-1, 0, 1, 2, -1, -4];
        var expected = [[-1, 0, 1], [-1, -1, 2]];

        var result = threeSum(tests);

        expect(result.length).to.equal(expected.length);

        expected.forEach(function (expct) {
            var existsInResult = result.some(function (set) {
                return _.isEqual(set, expct);
            });
            expect(existsInResult, 'output: ' + JSON.stringify(result) + ' should contains: ' + JSON.stringify(expct) ).to.be.true;
        });
        
    });

    it('should return three sets of triplets with sum of 0 without any duplicate sets', function () {
        var tests = [0, 1, -4, 0, 0, 8, 3, 4, 4, 7];
        var expected = [ [0, 0, 0], [-4, 0, 4], [-4, 1, 3] ];

        var result = threeSum(tests);

        // make sure there's no duplicates return, we're expecting only 3;
        expect(result.length).to.equal(expected.length); 

        expected.forEach(function (expct) {
            var existsInResult = result.some(function (set) {
                return _.isEqual(set, expct);
            });
            var msg = 'output: ' + JSON.stringify(result) + ' should contains: ' + JSON.stringify(expct);
            expect(existsInResult, msg).to.be.true;
        });

    });

    it('should return three sets of triplets with sum equal to 3', function () {
        var tests = [0, 1, -4, 0, 0, 8, 3, 4, 4, 7];
        var expected = [ [0, 0, 3], [-4, 0, 7], [-4, 3, 4] ];

        var result = threeSum(tests, 3);

        // make sure there's no duplicates return, we're expecting only 3;
        expect(result.length).to.equal(expected.length);

        expected.forEach(function (expct) {
            var existsInResult = result.some(function (set) {
                return _.isEqual(set, expct);
            });
            var msg = 'output: ' + JSON.stringify(result) + ' should contains: ' + JSON.stringify(expct);
            expect(existsInResult, msg).to.be.true;
        });

    });
});
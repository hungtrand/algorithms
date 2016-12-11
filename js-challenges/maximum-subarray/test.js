var chai  = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var fs = require('fs');
var solution = require('./solution');

describe('find the maximum possible sum of a Contiguous subarray ' +
            'and non-contiguous (not necessarily contiguous) subarray.', function() {

    it('should match read an input file and find max values of all array test case 01', function() {
        var input1 = fs.readFileSync('./test-case-01.txt').toString();
        var expected = fs.readFileSync('./test-case-01-output.txt').toString();

        var testArrs = solution.parseInput(input1);

        var maxFinder = new solution.MaxesFinder();

        var results = testArrs.map(function(arr) {
            return maxFinder.find(arr);
        });

        var strRes = results.join('\n');

        expect(strRes).to.equal(expected);
    });

    it('should match read an input file and find max values of all array test case 02', function() {
        var input = fs.readFileSync('./test-case-02.txt').toString();
        var expected = fs.readFileSync('./test-case-02-output.txt').toString();

        var testArrs = solution.parseInput(input);

        var maxFinder = new solution.MaxesFinder();

        var results = testArrs.map(function(arr) {
            return maxFinder.find(arr);
        });

        var strRes = results.join('\n');
        //console.log(strRes); console.log('----------'); console.log(expected);
        expect(strRes).to.equal(expected);
    })

});
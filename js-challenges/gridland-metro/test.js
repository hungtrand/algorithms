var chai  = require('chai');
var expect = chai.expect;
var assert = chai.assert;
var fs = require('fs');
var _ = require('underscore');
var solve = require('./solution');

describe('GRIDLAND METRO - HACKERRANK CHALLENGE', function() {
    var input1 = fs.readFileSync("/mnt/Lindows/Projects/hackerrank/js-challenges/gridland-metro/input06.txt").toString();
    var input2 = fs.readFileSync("/mnt/Lindows/Projects/hackerrank/js-challenges/gridland-metro/input19.txt").toString();
    var input3 = fs.readFileSync("/mnt/Lindows/Projects/hackerrank/js-challenges/gridland-metro/input07.txt").toString();

    var tests = [
        { input: input1, output: "343959391703854850" },
        { input: input2, output: "8705701581298678" },
        { input: input3, output: "563860737173235856" }
    ];

    tests.forEach(function(test) {
        var result = solve(test.input);
        var expected = test.output;

        /*** final checkpoint - count available grid for LampPost ***/
        it('should count ' + expected + ' lampposts in total', function() {
            expect(result).to.equal(expected);
        });
        /*** end of Final Checkpoint ***/
    });

});
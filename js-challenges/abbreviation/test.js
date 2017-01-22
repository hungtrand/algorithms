"use strict";
var Abbreviation_1 = require("./Abbreviation");
var chai_1 = require("chai");
var fs = require("fs");
// hackerrank processData()
/*
function processData(input) {
    var lines = input.split("\n");
    var n = parseInt(lines.shift());
    var j = 0;
    var results = [];
    while (j < n) {
        var strA = lines.shift();
        var strB = lines.shift();
        var abbr = new Abbreviation(strB);
        results.push(abbr.isValid(strA) ? "YES" : "NO");

        j++;
    }

    console.log(results.join("\n"));
}
*/
describe("Test if one string is abbreviation of another string.", function () {
    it("should be true: 'daBcd' & 'ABC'", function () {
        var abbr = new Abbreviation_1["default"]("ABC");
        chai_1.expect(abbr.isValid("daBcd")).is["true"];
    });
    it("should be false: 'dbAabAcdc' & 'ABC'", function () {
        var abbr = new Abbreviation_1["default"]("ABC");
        chai_1.expect(abbr.isValid("dbAabAcdc")).is["false"];
    });
    it("should be true: 'dbAAbbcdc' & 'AABC'", function () {
        var abbr = new Abbreviation_1["default"]("AABC");
        chai_1.expect(abbr.isValid("dbAAbbcdc")).is["true"];
    });
    it("should be true: 'dbAabbcdc' & 'ABC'", function () {
        var abbr = new Abbreviation_1["default"]("ABC");
        chai_1.expect(abbr.isValid("dbAabbcdc")).is["true"];
    });
    it("should be true: 'bBccC' & 'BBC'", function () {
        var abbr = new Abbreviation_1["default"]("BBC");
        chai_1.expect(abbr.isValid("bBccC")).is["true"];
    });
    var testFiles = [
        "input06.txt", "input08.txt"
    ];
    var outputs = [
        "output06.txt", "output08.txt"
    ];
    var base = "./js-challenges/abbreviation/";
    testFiles.forEach(function (file, i) {
        var strOutput = fs.readFileSync(base + outputs[i]).toString();
        var strInput = fs.readFileSync(base + file).toString();
        var expected = strOutput.split("\n");
        var lines = strInput.split("\n");
        var n = parseInt(lines.shift());
        var j = 0;
        while (j < n) {
            var strA = lines.shift();
            var strB = lines.shift();
            var msg = "should return '" + expected[j] + "' for test [" + j + "] in " + file;
            (function (a, b, e, m) {
                it(m, function () {
                    var abbr = new Abbreviation_1["default"](b);
                    chai_1.expect(abbr.isValid(a) ? "YES" : "NO").to.be.eql(e);
                });
            })(strA, strB, expected[j].trim(), msg);
            j++;
        }
    });
});

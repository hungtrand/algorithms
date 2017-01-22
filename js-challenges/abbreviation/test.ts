import Abbreviation from "./Abbreviation";
import { expect } from "chai";
import * as fs from "fs";

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

describe("Test if one string is abbreviation of another string.", function() {
    it("should be true: 'daBcd' & 'ABC'", function() {
        let abbr : Abbreviation = new Abbreviation("ABC");
        expect(abbr.isValid("daBcd")).is.true;
    });

    it("should be false: 'dbAabAcdc' & 'ABC'", function() {
        let abbr : Abbreviation = new Abbreviation("ABC");
        expect(abbr.isValid("dbAabAcdc")).is.false;
    });

    it("should be true: 'dbAAbbcdc' & 'AABC'", function() {
        let abbr : Abbreviation = new Abbreviation("AABC");
        expect(abbr.isValid("dbAAbbcdc")).is.true;
    });

    it("should be true: 'dbAabbcdc' & 'ABC'", function() {
        let abbr : Abbreviation = new Abbreviation("ABC");
        expect(abbr.isValid("dbAabbcdc")).is.true;
    });

    it("should be true: 'bBccC' & 'BBC'", function() {
        let abbr : Abbreviation = new Abbreviation("BBC");
        expect(abbr.isValid("bBccC")).is.true;
    });

    let testFiles : string[] = [
        "input06.txt", "input08.txt"
    ]

    let outputs : string[] = [
        "output06.txt", "output08.txt"
    ]
    let base = "./js-challenges/abbreviation/";
    testFiles.forEach(function(file, i) {
        let strOutput : string = fs.readFileSync(base + outputs[i]).toString();
        let strInput : string = fs.readFileSync(base + file).toString();
        let expected = strOutput.split("\n");
        let lines = strInput.split("\n");
        let n = parseInt(lines.shift());
        let j = 0;
        while (j < n) {
            let strA : string = lines.shift();
            let strB : string = lines.shift();
            let msg = "should return '" + expected[j] + "' for test [" + j + "] in " + file;
            (function(a, b, e, m) {
                it(m, function() {
                    let abbr : Abbreviation = new Abbreviation(b);
                    expect(abbr.isValid(a) ? "YES" : "NO").to.be.eql(e);
                });
            })(strA, strB, expected[j].trim(), msg);

            j++;
        }
    });
});
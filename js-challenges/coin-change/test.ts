import * as fs from "fs";
import { expect } from "chai";
import CoinChange from "./CoinChange";

/*** Coin Change - Hackerrank
 How many different ways can you make change for an amount, given a list of coins? In this problem, your code will need to efficiently compute the answer.

 Task

 Write a program that, given

 The amount  to make change for and the number of types  of infinitely available coins
 A list of  coins -
 Prints out how many different ways you can make change from the coins to STDOUT.
 ***/
let processData = function(input) {
    var lines = input.split("\n");

    var nm = lines.shift().split(" ");
    var N = nm[0], M = nm[1];
    var coins = lines.shift().split(" ");
    coins = coins.map(function(c) { return parseInt(c); });
    var ch = new CoinChange(coins);

    return ch.getNumberOfWaysToMakeChange(N);
}

describe("Calculate how many ways to make change given a list of coins and amount.", function() {
   it("should return 4 - given [1, 2, 3] and 4", function() {
        let ch = new CoinChange([1, 2, 3]);
        expect(ch.getNumberOfWaysToMakeChange(4)).to.equal(4);
   });

    it("should return 5 - given [2, 5, 3, 6] and 10", function() {
        let ch = new CoinChange([2, 5, 3, 6]);
        expect(ch.getNumberOfWaysToMakeChange(10)).to.equal(5);
    });

    it("should return 242 - given [1, 5, 10, 25] and 100", function() {
        let ch = new CoinChange([1, 5, 10, 25]);
        expect(ch.getNumberOfWaysToMakeChange(100)).to.equal(242);
    });

    it("should return 16 - given [1, 5, 10, 25, 50] and 100", function() {
        let ch = new CoinChange([1, 5, 10, 25, 50]);
        expect(ch.getNumberOfWaysToMakeChange(100)).to.equal(292);
    });

    let testFiles = ["input02.txt", "input10.txt"];
    let outputFiles = ["output02.txt", "output10.txt"];
    let base = "./js-challenges/coin-change/";

    testFiles.forEach(function(file, i) {
        let input = fs.readFileSync(base + file).toString();
        let expected = fs.readFileSync(base + outputFiles[i]).toString();

        it("should return: " + expected + " for test case " + file, function() {
            let actual = processData(input).toString();
            expect(actual).to.equal(expected);
        });
    });
});
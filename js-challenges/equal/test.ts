import {expect} from "chai";
import * as fs from "fs";

// Hackerrank Challenge "Equal". See https://www.hackerrank.com/challenges/equal
function countOps(orig: Array<number>): number {
    if (orig.length < 2) return 0;

    let count: number = 0;
    let interns: Array<number> = orig.map(function (e: number) {
        return e;
    });

    var comparator = function (left, right) {
        return left - right;
    }
    interns.sort(comparator);

    let first : boolean = true;
    let mIndex = interns.length - 1;
    let completed = false;
    while (!completed) {
        let diff = interns[mIndex] - interns[0];
        if ((diff === 3 || diff === 4 || diff === 9)
                && interns.indexOf(interns[mIndex]) !== mIndex
                && first === true) {
            let op = diff === 3 ? 2 : 1;
            count++;
            // the order should be reserved
            for (let i = 1, l = interns.length; i < l; i++) {
                interns[i] += op;
            }
        } else {
            let op = 5;
            if (diff === 1) op = 1;
            else if (diff < 5) op = 2

            let incre = diff - (diff % op);
            count += incre / op;

            interns[mIndex] -= incre;
            let lastMIndex = mIndex;
            mIndex = mIndex === 1 ? interns.length - 1 : mIndex - 1;
            while (interns[mIndex] === interns[0] && mIndex !== lastMIndex) {
                mIndex = mIndex === 1 ? interns.length - 1 : mIndex - 1;
            }
            if (mIndex === lastMIndex && interns[lastMIndex] === interns[0]) completed = true;
        }

        first = false;
    }

    return count;
}

function solveEqual(interns: Array<number>): number {
    return countOps(interns);
}

function parseIntoTestCases(input: string): Array<Array<number>> {
    let arr = input.split('\n');
    let nTestCases: number = parseInt(arr.shift());
    let testCases: Array<Array<number>> = [];
    while (nTestCases > 0) {
        arr.shift();
        let interns: Array<string> = arr.shift().split(' ');
        let intInterns: Array<number> = interns.map(function (e) {
            return parseInt(e);
        });

        testCases.push(intInterns);
        nTestCases--;
    }

    return testCases;
}

describe("Given a list of interns having number of chocolates. \
        For each operation, pick an intern, and give 1, 3, or 5 chocolates \
        to other interns who were not picked. Repeat until all inters \
        have the same number of chocolates ", function () {

    it('should return 2 for simplest test case', function () {
        let answer: number = solveEqual([2, 2, 3, 7]);
        expect(answer).to.be.equal(2);
    });

    it('should return 10 for 2nd simple test case', function () {
        let answer: number = solveEqual([2, 14, 17, 18]);
        expect(answer).to.be.equal(10);
    });

    let testFiles = [
        { input: 'test-case-0.txt', output: 'output-0.txt' },
        { input: 'input11.txt', output: 'output11.txt' },
        { input: 'input12.txt', output: 'output12.txt' },
        { input: 'input02.txt', output: 'output02.txt' },
        { input: 'input03.txt', output: 'output03.txt' },
        { input: 'input04.txt', output: 'output04.txt' },
        { input: 'input05.txt', output: 'output05.txt' },
        { input: 'input10.txt', output: 'output10.txt' },
        { input: 'input13.txt', output: 'output13.txt' }
    ]

    testFiles.forEach(function(file) {
        it('should pass this test file: ' + file.input, function () {
            let testFile: string = fs.readFileSync('./js-challenges/equal/' + file.input).toString();
            let output: string = fs.readFileSync('./js-challenges/equal/' + file.output)
                .toString().replace(new RegExp('\r\n', 'g'), '\n');
            let testCases: Array<Array<number>> = parseIntoTestCases(testFile);
            let results: Array<number> = [];

            while (testCases.length > 0) {
                results.push(solveEqual(testCases.shift()));
            }

            expect(results.join('\n')).to.be.equal(output);
        });
    });
});


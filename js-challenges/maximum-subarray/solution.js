var MaxesFinder = function() {
}

MaxesFinder.prototype.find = function(arr) {
    // var maxNonCont = this.findMaxNonCont(arr);
    // var maxCont = this.findMaxCont(arr);

    var contMemo = [];
    var nonContMemo = [];

    arr.forEach(function(x, i) {
        if (i == 0) {
            contMemo[i] = nonContMemo[i] = x;
        } else {
            if (x > contMemo[i-1] + x) {
                contMemo[i] = x;
            } else {
                contMemo[i] = contMemo[i-1] + x;
            }

            if (x >= nonContMemo[i - 1] && nonContMemo[i - 1] < 0) {
                nonContMemo[i] = x;
            } else if (x >= 0) {
                nonContMemo[i] = nonContMemo[i - 1] + x;
            } else {
                nonContMemo[i] = nonContMemo[i - 1];
            }
        }
    });

    var maxCont = Math.max.apply(null, contMemo);
    var maxNonCont = Math.max.apply(null, nonContMemo);

    return maxCont.toString() + ' ' + maxNonCont.toString();
}

// function to parse an input from a file
var parseInput = function(input) {
    var rows = input.split('\n');
    var cntCases = parseInt(rows.shift());
    var testCases = [];
    var r;
    while(r = rows.shift()) {
        if (!isNaN(parseInt(r))) {
            var testCase = rows.shift().split(' ');
            testCase = testCase.map(function(num) {
                return parseInt(num);
            });
            testCases.push(testCase);
        }
    }

    return testCases;
}

module.exports = {
    MaxesFinder: MaxesFinder,
    parseInput: parseInput
}
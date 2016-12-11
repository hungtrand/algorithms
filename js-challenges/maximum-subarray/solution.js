var MaxesFinder = function() {
    this.sorted = null;

}
MaxesFinder.prototype.findMaxCont = function(arr) {
    var max = arr[0];

    for (var i = 0, l = arr.length; i < l; i++) {
        var iMax = arr[i];

        for (var j = i + 1; j < l; j++) {
            iMax = iMax + arr[j];

            if (iMax > max) max = iMax;
        }
    }

    return max;
}

MaxesFinder.prototype.findMaxNonCont = function(arr) {
    var sorted = arr.map(function(e) { return e; }).sort().reverse();

    var max = sorted.reduce(function(curMax, next, i) {
        if (next >= 0) return curMax + next;
        return curMax;
    });

    if (max < 0) max = sorted[sorted.length - 1];
    return max;
}

MaxesFinder.prototype.find = function(arr) {
    var maxNonCont = this.findMaxNonCont(arr);
    var maxCont = this.findMaxCont(arr);

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
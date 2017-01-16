module.exports = function (listInts, target) {
    // return sets of integer triplets that have a sum equal to 0
    target = isNaN(parseInt(target)) || parseInt(target) === NaN ? 0 : target;
    var findings = [];

    // sort the list to easily eliminate duplicate as we iterate
    listInts.sort(function (l, r) {
        return l - r;
    });
    listInts.forEach(function (x, i) {
        // skip if this is a duplicate of the previous number
        if (i > 0 && listInts[i - 1] == x) return false;

        // now perform a 2Sum to find two other numbers, y & z,  that sum to be equal -x
        var j = i + 1, y = listInts[j];
        var k = listInts.length - 1, z = listInts[k];

        // since the array is sorted, we iterate with 2 pointers, j & k, 
        //moving toward each other until j >= k
        while (j < k) {
            var yz = y + z;
            if (x + yz === target) {
                findings.push([x, y, z].sort());
            }

            if (yz < target - x) {
                // if the next y is a duplicate of the previous, skip
                do {
                    y = listInts[++j];
                } while (y === listInts[j - 1]);
            } else {
                // if the next z is a duplicate of the previous, skip
                do {
                    z = listInts[--k];
                } while(z === listInts[k + 1]);
            }
        }
    });

    return findings;
}
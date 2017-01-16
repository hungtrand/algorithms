/***
 Rotate an array of n elements to the right by k steps.
 For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4]. How many different ways do you know to solve this problem?
 ***/

var solve = function(arr, k) {
    while (k > 0) {
        var end = arr.pop();
        arr.unshift(end);
        k--;
    }

    return arr;
}

module.exports = solve;
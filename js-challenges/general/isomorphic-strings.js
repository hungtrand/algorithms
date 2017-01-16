var solve = function(s1, s2) {
    if (s1.length == 0 && s2.length == 0) return true;
    if (!s1 || !s2) return false;
    if (s1.length !== s2.length) return false;

    var map1 = {};
    var map2 = {};

    s1Chars = s1.split('');
    s2Chars = s2.split('');

    for (var i = 0, l = s1Chars.length; i < l; i++) {
        var char1 = s1Chars[i];
        var char2 = s2Chars[i];

        if (!map1.hasOwnProperty(char1) && !map2.hasOwnProperty(char2)) {
            map1[char1] = char2;
            map2[char2] = char1;
        }

        if (map1.hasOwnProperty(char1) && char2 !== map1[char1]) {
            return false;
        }

        if (map2.hasOwnProperty(char2) && char1 !== map2[char2]) {
            return false;
        }
    }

    return true;
}

module.exports = solve;
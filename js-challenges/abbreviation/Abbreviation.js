"use strict";
var Abbreviation = (function () {
    function Abbreviation(abbr) {
        this.abbr = abbr;
        this.charCount = {};
        this.firstChar = abbr[0];
        for (var i = 0, l = abbr.length; i < l; i++) {
            if (this.charCount.hasOwnProperty(abbr[i])) {
                this.charCount[abbr[i]]++;
            }
            else {
                this.charCount[abbr[i]] = 1;
            }
        }
    }
    Abbreviation.prototype.isValid = function (fullString) {
        var memoize = {};
        var i = 0;
        var uchars = {};
        while (i < fullString.length) {
            var char = fullString[i];
            if (this.isUpperCase(char)) {
                uchars[char] = (uchars[char] || 0) + 1;
            }
            if (this.isLowerCase(char) && !this.charCount.hasOwnProperty(char.toUpperCase())) {
                fullString = fullString.substring(0, i) + fullString.substr(i + 1, fullString.length);
            }
            else if (this.isUpperCase(char) && !this.charCount.hasOwnProperty(char)) {
                return false;
            }
            else if (uchars[char] > this.charCount[char]) {
                return false;
            }
            else {
                i++;
            }
        }
        return this.find(fullString, memoize);
    };
    Abbreviation.prototype.find = function (str, memoize) {
        // console.log(str.length + " # " + str);
        if (memoize.hasOwnProperty(str))
            return memoize[str];
        memoize[str] = str.toUpperCase() === this.abbr || false;
        if (memoize[str] === true)
            return true;
        if (str.length - 1 < this.abbr.length)
            return false;
        var i = 0;
        var j = -1;
        var uStr = str.toUpperCase();
        while (i < this.abbr.length) {
            var ch = this.abbr[i];
            j = uStr.indexOf(ch, j + 1);
            if (j < 0) {
                return false;
            }
            i++;
        }
        for (var i_1 = 0, l = str.length; i_1 < l; i_1++) {
            var char = str[i_1];
            if (this.isUpperCase(char))
                continue;
            var substr = str.substring(0, i_1) + str.substring(i_1 + 1, l);
            memoize[str] = this.find(substr, memoize) || memoize[str];
            if (memoize[str] === true)
                break;
        }
        return memoize[str];
    };
    Abbreviation.prototype.isLowerCase = function (char) {
        return char.toLowerCase() === char;
    };
    Abbreviation.prototype.isUpperCase = function (char) {
        return char.toUpperCase() === char;
    };
    return Abbreviation;
}());
exports.__esModule = true;
exports["default"] = Abbreviation;

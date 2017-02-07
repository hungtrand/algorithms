"use strict";
var CoinChange = (function () {
    function CoinChange(coins) {
        this.coins = coins;
    }
    CoinChange.prototype.getNumberOfWaysToMakeChange = function (amount) {
        return this._countWaysToMakeChange(this.coins, amount);
    };
    CoinChange.prototype._countWaysToMakeChange = function (coins, amount) {
        var dpCountTable = [];
        var memo = {};
        var fn = (function (m, combination) {
            var key = this._hashKey(combination, m);
            if (m === 0)
                return 1;
            if (combination.length === 0 || m < 0)
                return 0;
            if (memo.hasOwnProperty(key))
                return memo[key];
            var cntExcl = fn(m, combination.slice(1));
            var cntIncl = fn(m - combination[0], combination);
            var cnt = cntExcl + cntIncl;
            memo[key] = cnt;
            dpCountTable[m] = cnt;
            return cnt;
        }).bind(this);
        fn(amount, coins);
        return dpCountTable[dpCountTable.length - 1];
    };
    CoinChange.prototype._hashKey = function (coins, amount, prefix) {
        if (prefix === void 0) { prefix = null; }
        return (prefix ? prefix + "," : "") + coins.toString() + "|" + amount;
    };
    return CoinChange;
}());
exports.__esModule = true;
exports["default"] = CoinChange;

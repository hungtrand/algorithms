export default class CoinChange {
    constructor(private coins : number[]) {

    }

    public getNumberOfWaysToMakeChange(amount : number) : number {
        return this._countWaysToMakeChange(this.coins, amount);
    }

    private _countWaysToMakeChange(
        coins: number[],
        amount : number
    ) : number
    {
        let dpCountTable : number[] = [];
        let memo = {};

        let fn = (function(m, combination) {
            let key = this._hashKey(combination, m);
            if (m === 0) return 1;
            if (combination.length === 0 || m < 0) return 0;
            if (memo.hasOwnProperty(key))
                return memo[key];

            let cntExcl = fn(m, combination.slice(1));
            let cntIncl = fn(m - combination[0], combination);

            let cnt = cntExcl + cntIncl;
            memo[key] = cnt;
            dpCountTable[m] = cnt;

            return cnt;
        }).bind(this);
        fn(amount, coins);

        return dpCountTable[dpCountTable.length - 1];
    }

    private _hashKey(coins :number[], amount :number, prefix :number = null) {
        return (prefix ? prefix + "," : "") + coins.toString() + "|" + amount;
    }
}
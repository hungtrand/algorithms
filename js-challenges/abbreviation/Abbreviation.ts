export default class Abbreviation {
    private firstChar : string;
    private charCount : { [ char : string ] : number } = {};

    constructor(private abbr : string) {
        this.firstChar = abbr[0];

        for (let i = 0, l = abbr.length; i < l; i++) {
            if (this.charCount.hasOwnProperty(abbr[i])) {
                this.charCount[abbr[i]]++;
            } else {
                this.charCount[abbr[i]] = 1;
            }
        }
    }
    public isValid(fullString : string) : boolean {
        let memoize : { [str : string] : boolean } = {};

        let i : number = 0;
        let uchars : { [char : string] : number} = {};
        while(i < fullString.length) {
            let char = fullString[i];
            if (this.isUpperCase(char)) {
                uchars[char] = (uchars[char] || 0) + 1;
            }
            if (this.isLowerCase(char) && !this.charCount.hasOwnProperty(char.toUpperCase())) {
                fullString = fullString.substring(0, i) + fullString.substr(i + 1, fullString.length);
            } else if (this.isUpperCase(char) && !this.charCount.hasOwnProperty(char)) {
                return false;
            } else if (uchars[char] > this.charCount[char]) {
                return false;
            } else {
                i++;
            }
        }

        return this.find(fullString, memoize);
    }

    private find(str : string, memoize : { [s : string] : boolean }) : boolean {
        // console.log(str.length + " # " + str);
        if (memoize.hasOwnProperty(str)) return memoize[str];
        memoize[str] = str.toUpperCase() === this.abbr || false;
        if (memoize[str] === true)
            return true;
        if (str.length - 1 < this.abbr.length)
            return false;

        let i = 0;
        let j = -1;
        let uStr :string = str.toUpperCase();
        while (i < this.abbr.length) {
            let ch = this.abbr[i];
            j = uStr.indexOf(ch, j + 1);
            if (j < 0) {
                return false;
            }
            i++;
        }

        for (let i = 0, l = str.length; i < l; i++) {
            let char = str[i];
            if (this.isUpperCase(char)) continue;
            let substr = str.substring(0, i) + str.substring(i + 1, l);
            memoize[str] = this.find(substr, memoize) || memoize[str];
            if (memoize[str] === true) break;
        }

        return memoize[str];
    }

    private isLowerCase(char : string) : boolean {
        return char.toLowerCase() === char;
    }

    private isUpperCase(char : string) : boolean {
        return char.toUpperCase() === char;
    }
}
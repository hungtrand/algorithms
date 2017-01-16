"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var SearchPath_1 = require("./SearchPath");
var Search = (function () {
    function Search() {
    }
    Search.prototype.search = function (query, start) {
        // frontier : array of Paths
        this.frontier = new Array();
        // create a new SearchPath
        var p = new SearchPath_1["default"]();
        p.contents.push(start);
        // initial path for frontier
        this.frontier.push(p);
        while (this.frontier.length > 0) {
            // use pickPath() to select a path from frontier
            var pick = this.pickPath();
            // if the picked path contains the Goal SearchNode than return the selected path
            if (this.hasGoal(query, pick)) {
                return pick;
            }
            else {
                var lastIndex = pick.contents.length - 1;
                var last = pick.contents[lastIndex];
                last.children.forEach(function (child) {
                    var newPath = new SearchPath_1["default"]();
                    // copy nodes from old path to initialize new path
                    this.copyPath(pick, newPath);
                    // add additional node at the end of new path
                    newPath.contents.push(child);
                    // push new path (extended path) into frontier
                    this.frontier.push(newPath);
                }, this);
            }
        }
        // after the while loop, if this line executed meaning no SearchPath found containing goal
        // return null as not found
        return null;
    };
    Search.prototype.copyPath = function (fromPath, toPath) {
        if (!toPath)
            throw (new Error('To copy SearchPath, must provide both origin and destination'));
        fromPath.contents.forEach(function (n) {
            toPath.contents.push(n);
        });
    };
    Search.prototype.hasGoal = function (query, path) {
        return path.contents.some(function (n) {
            return n.contents == query;
        });
    };
    return Search;
}());
var BFSearch = (function (_super) {
    __extends(BFSearch, _super);
    function BFSearch() {
        return _super.call(this) || this;
    }
    BFSearch.prototype.pickPath = function () {
        return this.frontier.shift();
    };
    return BFSearch;
}(Search));
exports.BFSearch = BFSearch;
var DFSearch = (function (_super) {
    __extends(DFSearch, _super);
    function DFSearch() {
        return _super.call(this) || this;
    }
    DFSearch.prototype.pickPath = function () {
        return this.frontier.pop();
    };
    return DFSearch;
}(Search));
exports.DFSearch = DFSearch;

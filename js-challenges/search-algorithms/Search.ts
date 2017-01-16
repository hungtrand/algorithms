import SearchNode from "./SearchNode";
import SearchPath from "./SearchPath";

abstract class Search {
    protected frontier : Array<SearchPath>;

    constructor() {

    }

    search(query : string, start : SearchNode) {
        // frontier : array of Paths
        this.frontier = new Array<SearchPath>();

        // create a new SearchPath
        var p = new SearchPath();
        p.contents.push(start);

        // initial path for frontier
        this.frontier.push(p);

        while(this.frontier.length > 0) {
            // use pickPath() to select a path from frontier
            var pick : SearchPath = this.pickPath();

            // if the picked path contains the Goal SearchNode than return the selected path
            if (this.hasGoal(query, pick)) {
                return pick;
            } else {
                var lastIndex = pick.contents.length - 1;
                var last : SearchNode = pick.contents[lastIndex];

                last.children.forEach(function(child : SearchNode) {
                   var newPath = new SearchPath();

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
    }

    copyPath(fromPath : SearchPath, toPath : SearchPath) {
        if (!toPath) throw(new Error('To copy SearchPath, must provide both origin and destination'));

        fromPath.contents.forEach(function(n) {
           toPath.contents.push(n);
        });
    }

    hasGoal(query : string, path : SearchPath) {
        return path.contents.some(function(n : SearchNode) {
           return n.contents == query;
        });
    }

    abstract pickPath() : SearchPath;
}

export class BFSearch extends Search {
    constructor() {
        super();
    }

    pickPath() : SearchPath {
        return this.frontier.shift();
    }
}

export class DFSearch extends Search {
    constructor() {
        super();
    }

    pickPath() : SearchPath {
        return this.frontier.pop();
    }
}
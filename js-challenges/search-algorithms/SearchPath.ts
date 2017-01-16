import SearchNode from "./SearchNode";

export default class SearchPath {
    public contents : Array<SearchNode>;
    constructor() {
        this.contents = new Array<SearchNode>();
    }
}
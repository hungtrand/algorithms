export default class SearchNode {
    public children: SearchNode[];

    constructor(public contents : string) {
        this.children = new Array<SearchNode>();
    }
}
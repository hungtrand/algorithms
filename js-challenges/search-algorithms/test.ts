import SearchNode from "./SearchNode";
import SearchPath from "./SearchPath";
import { BFSearch, DFSearch } from "./Search";
import { expect } from "chai";

describe("Test frontier search algorithm", function () {
    it('should find a path to its goal character', function () {
        var nodeA = new SearchNode('a')
        var nodeB = new SearchNode('b');
        var nodeC = new SearchNode('c');
        var nodeD = new SearchNode('d');
        var nodeE = new SearchNode('e');
        var nodeF = new SearchNode('f');
        var nodeG = new SearchNode('g');
        var nodeH = new SearchNode('h');
        var nodeI = new SearchNode('i');
        var nodeJ = new SearchNode('j');
        var nodeK = new SearchNode('k');


        nodeA.children.push(nodeB);
        nodeA.children.push(nodeC);
        nodeA.children.push(nodeD);

        nodeB.children.push(nodeE);
        nodeB.children.push(nodeF);

        nodeC.children.push(nodeG);
        nodeC.children.push(nodeH);
        nodeC.children.push(nodeI);

        nodeD.children.push(nodeJ);

        nodeJ.children.push(nodeK);
        nodeJ.children.push(nodeG);

        var bfSearch = new BFSearch();
        var dfSearch = new DFSearch();

        // search for "d"
        var pd : SearchPath = bfSearch.search('d', nodeA);
        expect(pd.contents).to.eql([nodeA, nodeD]);

        // search for "a"
        var pa : SearchPath = bfSearch.search("a", nodeA);
        expect(pa.contents).to.eql([nodeA]);

        // search for "b"
        var pb : SearchPath = bfSearch.search("b", nodeA);
        expect(pb.contents).to.eql([nodeA, nodeB]);

        // search for "c"
        var pc : SearchPath = bfSearch.search("c", nodeA);
        expect(pc.contents).to.eql([nodeA, nodeC]);

        // search for "z" // does not exist
        var pz : SearchPath = bfSearch.search("z", nodeA);
        expect(pz).to.be.null;

        // search for "g" // Breadth First Search
        console.time("Breadth First Search: node G");
        var pg1 : SearchPath = bfSearch.search("g", nodeA);
        expect(pg1.contents).to.eql([nodeA, nodeC, nodeG]);
        console.timeEnd("Breadth First Search: node G");

        // search for "g" // Depth First Search
        console.time("Depth First Search: node G");
        var pg2 : SearchPath = dfSearch.search("g", nodeA);
        expect(pg2.contents).to.eql([nodeA, nodeD, nodeJ, nodeG]);
        console.timeEnd("Depth First Search: node G");

        // search for "g" // Breadth First Search
        console.time("Breadth First Search: node K");
        var pk1 : SearchPath = bfSearch.search("k", nodeA);
        expect(pk1.contents).to.eql([nodeA, nodeD, nodeJ, nodeK]);
        console.timeEnd("Breadth First Search: node K");

        // search for "g" // Depth First Search
        console.time("Depth First Search: node K");
        var pk2 : SearchPath = dfSearch.search("k", nodeA);
        expect(pk2.contents).to.eql([nodeA, nodeD, nodeJ, nodeK]);
        console.timeEnd("Depth First Search: node K");
    });
});
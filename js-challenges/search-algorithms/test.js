"use strict";
var SearchNode_1 = require("./SearchNode");
var Search_1 = require("./Search");
var chai_1 = require("chai");
describe("Test frontier search algorithm", function () {
    it('should find a path to its goal character', function () {
        var nodeA = new SearchNode_1["default"]('a');
        var nodeB = new SearchNode_1["default"]('b');
        var nodeC = new SearchNode_1["default"]('c');
        var nodeD = new SearchNode_1["default"]('d');
        var nodeE = new SearchNode_1["default"]('e');
        var nodeF = new SearchNode_1["default"]('f');
        var nodeG = new SearchNode_1["default"]('g');
        var nodeH = new SearchNode_1["default"]('h');
        var nodeI = new SearchNode_1["default"]('i');
        var nodeJ = new SearchNode_1["default"]('j');
        var nodeK = new SearchNode_1["default"]('k');
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
        var bfSearch = new Search_1.BFSearch();
        var dfSearch = new Search_1.DFSearch();
        // search for "d"
        var pd = bfSearch.search('d', nodeA);
        chai_1.expect(pd.contents).to.eql([nodeA, nodeD]);
        // search for "a"
        var pa = bfSearch.search("a", nodeA);
        chai_1.expect(pa.contents).to.eql([nodeA]);
        // search for "b"
        var pb = bfSearch.search("b", nodeA);
        chai_1.expect(pb.contents).to.eql([nodeA, nodeB]);
        // search for "c"
        var pc = bfSearch.search("c", nodeA);
        chai_1.expect(pc.contents).to.eql([nodeA, nodeC]);
        // search for "z" // does not exist
        var pz = bfSearch.search("z", nodeA);
        chai_1.expect(pz).to.be["null"];
        // search for "g" // Breadth First Search
        console.time("Breadth First Search: node G");
        var pg1 = bfSearch.search("g", nodeA);
        chai_1.expect(pg1.contents).to.eql([nodeA, nodeC, nodeG]);
        console.timeEnd("Breadth First Search: node G");
        // search for "g" // Depth First Search
        console.time("Depth First Search: node G");
        var pg2 = dfSearch.search("g", nodeA);
        chai_1.expect(pg2.contents).to.eql([nodeA, nodeD, nodeJ, nodeG]);
        console.timeEnd("Depth First Search: node G");
        // search for "g" // Breadth First Search
        console.time("Breadth First Search: node K");
        var pk1 = bfSearch.search("k", nodeA);
        chai_1.expect(pk1.contents).to.eql([nodeA, nodeD, nodeJ, nodeK]);
        console.timeEnd("Breadth First Search: node K");
        // search for "g" // Depth First Search
        console.time("Depth First Search: node K");
        var pk2 = dfSearch.search("k", nodeA);
        chai_1.expect(pk2.contents).to.eql([nodeA, nodeD, nodeJ, nodeK]);
        console.timeEnd("Depth First Search: node K");
    });
});

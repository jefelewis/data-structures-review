/*
Notes:
- Directed vs. Undirected?s
- Nodes/Vertices: Data within the graph
- Edges: The connections between the Nodes/Vertices

- Non Linear
- Time Complexity: 
- Space Complexity: 
*/

/*
Examples:
- Social Media (Nodes Are People & Edges Equal Relationships)
*/

/*
Tests:
let testGraph = new Graph();

testGraph.print();

console.log('Adding Items');
testGraph.addNode('Jeff');
testGraph.addNode('Jeff');
testGraph.addNode('Sam');
testGraph.addNode('Jessica');
testGraph.print();
*/

// Node
class Node {
  constructor(value) {
    this.value = value;
    this.edges = {};
  };

  // 
};



// Graph
class Graph {
  constructor() {
    this.nodes = [];
  };
  
  // Add Node (Vertex)
  addNode(value) {
    // Check If Node Exists
    if (!this.nodes[value]) {
      this.nodes[value] = new Node(value);
    }
    else {
      console.log('Node already exists');
    }
  };

  // Remove Node (Vertex)
  removeNode() {

  };


  // Find Node (Vertex)
  findNode() {

  };


  // Add Edge
  addEdge() {

  };

  // HELPER FUNCTIONS
  // Print
  print() {
    console.log(this.nodes);
  };
};
/*
Notes:
- Uses Pointers
- Time Complexity: 
- Space Complexity: 
*/


/*
Tests:


*/


// Node
class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  };
};


// Linked List (Single)
class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  };

  // DATA FUNCTIONS
  // Add Node
  addNode(value) {
    // Create Node + Current Node
    let node = new Node(value);
    let currentNode = null;

    // Check If Linked List Is Empty
    if (this.head === null) {
      // Assign Node To Head
      this.head = node;
    }
    else {
      // 
      currentNode === this.head;

    }
  };

  // Insert Node At
  insertNodeAt(node, index) {

  };


  // Remove Node
  removeNode(node) {

  };

  // Remove Node At
  removeNodeAt(node, location) {

  };

  
  // HELPER FUNCTIONS
  // Is Empty
  isEmpty() {
    if (this.length === 0) {
      return true;
    }
    else {
      return false;
    }
  };

  // Size
  size() {
    return this.length;
  };

  // Print Linked List
  print() {
    // Current Node + String
    let currentNode = this.head;
    let string = '';

    // While Current Node
    while (currentNode) {
      // Add To String?
      string += currentNode.next + ' ';
      currentNode = currentNode.next;
    }

    // Return String
    return string;
  };
};
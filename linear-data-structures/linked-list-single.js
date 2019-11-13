/*
Notes:
- Uses Pointers
- Time Complexity: 
- Space Complexity: 
*/


/*
Tests:
let testLinkedList = new LinkedList();

console.log(`Empty: ${testLinkedList.isEmpty()}`);
console.log(`Size: ${testLinkedList.size()}`);
console.log(`Print: ${testLinkedList.print()}`);
console.log('\n');



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
    // Create Node
    let node = new Node(value);

    // Check If Linked List Is Empty
    if (this.head === null) {
      // Assign Node To Head
      this.head = node;
    }
    else {
      // Current Node (Start With Head)
      let currentNode = this.head;

      // Iterate Over Linked List To Last Node
      while (currentNode.next) {
        currentNode = currentNode.next;
      }

      // Add Node
      currentNode.next = node;
    }

    // Increase Length
    this.length++;
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
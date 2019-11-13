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

console.log('Adding Nodes');
testLinkedList.addNode(2);
testLinkedList.addNode(4);
testLinkedList.addNode(6);
testLinkedList.addNode(8);
testLinkedList.addNode(10);

console.log(`Empty: ${testLinkedList.isEmpty()}`);
console.log(`Size: ${testLinkedList.size()}`);
console.log(`Print: ${testLinkedList.print()}`);
console.log('\n');

console.log('Removing Node');
testLinkedList.removeNode(6);

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
  insertNodeAt(value, index) {
    // Current Node + Counter
    let currentNode = null;
    let counter = 0;

    // Iterate Over Linked List
    while (counter <= index) {
      currentNode = currentNode.next;
    }

    // Insert Value


    // Reattached Succeeding Nodes

  };


  // Remove Node (WORKING?)
  removeNode(node) {
    // Current Node + Previous Node
    let currentNode = this.head;
    let previousNode = null;

    // Iterate Over Linked List
    while (currentNode !== null) {
      // Check If Current Node's Value Equals Value
      if (currentNode.value === value) {
        // Check If Node is Head (WORKING?)
        if (previousNode === null) {
          // Reassign Head
          this.head = currentNode.next;
        }
        else {
          // dfd
          previousNode.next = currentNode.next;
        }

        //
        this.length--;
        return currentNode.value
      }

      //
      previousNode = currentNode;
      currentNode = currentNode.next;
    }
  };

  // Remove Node At
  removeNodeAt(node, location) {

  };

  
  // HELPER FUNCTIONS
  // Index Of
  indexOf(value) {
    // Count + Current Node
    let count = 0;
    let currentNode = this.head;

    // Iterate Over Linked List
    while (currentNode !== null) {
      // Check If Current Node's Value Equals Value
      if (currentNode.value === value) {
        return count;
      }
      else {
        // Advance To Next Node + Increase Count
        currentNode = currentNode.next;
        count++;
      }
    }
  };

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
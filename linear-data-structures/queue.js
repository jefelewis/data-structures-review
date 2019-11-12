/*
Notes:
- FIFO (First In First Out)
- Time Complexity: 
- Space Complexity: 
*/


/*
Tests:
let testStack = new Queue();

console.log(`Empty: ${testStack.isEmpty()}`);
console.log('\n');

console.log('Adding Elements');
testStack.addElement(2);
testStack.addElement(4);
testStack.addElement(6);
testStack.addElement(8);
testStack.addElement(10);
console.log(testStack.viewQueue());
console.log('\n');

console.log('Removing Element');
testStack.removeElement();
console.log(testStack.viewQueue());
console.log('\n');

console.log(`First Element: ${testStack.viewFirstElement()}`);
console.log(`Empty: ${testStack.isEmpty()}`);
*/


// Queue
class Queue {
  constructor() {
    this.storage = [];
  };

  // Add Element (Enqueue)
  addElement(element) {
    this.storage.push(element);
  };

  // Remove Element (Dequeue)
  removeElement() {
    this.storage.shift();
  };

  // View First Element At The Front Of The Queue
  viewFirstElement() {
    return this.storage[0];
  };

  // Is Empty
  isEmpty() {
    // Check If Array Is Empty
    if (this.storage.length === 0) {
      return true;
    }
    else {
      return false;
    }
  };

  // View Queue
  viewQueue() {
    return this.storage;
  };
};

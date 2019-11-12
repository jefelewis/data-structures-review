/*
Notes:
- FIFO (First In First Out)
- Time Complexity: 
- Space Complexity: 
*/


/*
Tests:
let testQueue = new Queue();

console.log(`Empty: ${testQueue.isEmpty()}`);
console.log('\n');

console.log('Adding Elements');
testQueue.addElement(2);
testQueue.addElement(4);
testQueue.addElement(6);
testQueue.addElement(8);
testQueue.addElement(10);
console.log(testQueue.viewQueue());
console.log('\n');

console.log('Removing Element');
testQueue.removeElement();
console.log(testQueue.viewQueue());
console.log('\n');

console.log(`First Element: ${testQueue.viewFirstElement()}`);
console.log(`Empty: ${testQueue.isEmpty()}`);
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
    // Check If Queue Is Not Empty
    if (!this.isEmpty()) {
      // Remove First Element
      this.storage.shift();
    }
    else {
      console.log('Queue is empty');
    }
  };

  // View First Element At The Front Of The Queue
  viewFirstElement() {
    // Check If Queue Is Not Empty
    if (!this.isEmpty()) {
      // Return First Element
      return this.storage[0];
    }
    else {
      console.log('Queue is empty');
    }
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

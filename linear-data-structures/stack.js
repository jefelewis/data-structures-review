/*
Notes:
- LIFO (Last In First Out)
- Time Complexity: 
- Space Complexity: 
*/


/*
Tests:
let testStack = new Stack();

console.log(`Empty: ${testStack.isEmpty()}`);
console.log('\n');

console.log('Adding Elements');
testStack.addElement(2);
testStack.addElement(4);
testStack.addElement(6);
testStack.addElement(8);
testStack.addElement(10);
console.log(testStack.viewStack());
console.log('\n');

console.log('Removing Element');
testStack.removeElement();
console.log(testStack.viewStack());
console.log('\n');

console.log(`Last Element: ${testStack.viewLastElement()}`);
console.log(`Empty: ${testStack.isEmpty()}`);
*/


// Stack
class Stack {
  constructor () {
    this.storage = [];
  };

  // Add Element
  addElement(element) {
    this.storage.push(element);
  };

  // Remove Element
  removeElement() {
    this.storage.pop();
  };

  // View Last Element At Top Of The Stack
  viewLastElement() {
    return this.storage[this.storage.length - 1];
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

  // View Stack
  viewStack() {
    return this.storage;
  };
};

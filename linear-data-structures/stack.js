/*
Notes:
- LIFO (Last In First Out)
- Time Complexity: 
- Space Complexity: 
*/


/*
Tests:
let testStack = new Stack();

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


// Queue
class Stack {
  constructor () {
    this.items = [];
  };

  // Add Element
  addElement(element) {
    this.items.push(element);
  };

  // Remove Element
  removeElement() {
    this.items.pop();
  };

  // View Last Element At Top Of The Stack)
  viewLastElement() {
    return this.items[this.items.length - 1];
  };

  // Is Empty
  isEmpty() {
    // Check If Array Is Empty
    if (this.items.length === 0) {
      return true;
    }
    else {
      return false;
    }
  };

  // View Stack
  viewStack() {
    return this.items;
  };
};

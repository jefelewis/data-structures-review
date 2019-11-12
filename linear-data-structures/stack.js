/*
Notes:
- LIFO (Last In First Out)
- Time Complexity: 
- Space Complexity: 
*/

// Queue
class Stack {
  constructor () {
    this.items = [];
  };

  // Add Element
  addElement = (element) => {
    this.items.push(element);
  };

  // Remove Element
  removeElement = () => {
    this.items.pop(element);
  };

  // View Last Element At Top Of The Stack)
  viewLastElement = () => {
    return this.items[this.items.length - 1];
  };

  // Is Empty
  isEmpty = () => {
    // Check If Array Is Empty
    if (this.items.length === 0) {
      return true;
    }
    else {
      return false;
    }
  };

  // View Stack
  viewStack = () => {
    return this.items;
  };
};

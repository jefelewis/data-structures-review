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

  // Push Element
  push = (element) => {
    this.items.push(element);
  }

  // Pop Element
  pop = () => {
    this.items.pop(element);
  }

  // Peek (View Element At Top Of The Stack)
  peek = () => {
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

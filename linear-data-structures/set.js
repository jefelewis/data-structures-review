/*
Notes:
- Non Linear
- Store unique values (No duplicate items)
- Time Complexity: 
- Space Complexity: 
*/


/*
Tests:
let testSet = new Set();

console.log(`Empty: ${testSet.isEmpty()}`);
testSet.print();
console.log('\n');

console.log('Adding Items');
testSet.addItem(1);
testSet.addItem(1);
testSet.addItem(2);
testSet.addItem(3);
testSet.addItem(4);
testSet.addItem(5);
testSet.print();
console.log('\n');

console.log('Finding Items');
testSet.hasItem(1);
testSet.hasItem(2);
testSet.hasItem(6);
testSet.print();
console.log('\n');

console.log('Removing Items');
testSet.removeItem(2)
testSet.print();
console.log('\n');
*/


// Set
class Set {
  constructor() {
    this.storage = [];
  };

  // DATA FUNCTIONS
  // Has Item
  hasItem(item) {
    // Found
    let found = false;

    // Iterate Over Storage
    for (let i = 0; i < this.storage.length; i++) {
      // Check If Item Exists
      if (this.storage[i] === item) {
        found = true;
      }
    }

    // Return
    return found;
  };

  // Add Item
  addItem(item) {
    // Check If Item Exists In Storage
    if (this.hasItem(item)) {
      console.log(`Set already contains item (${item})`);
    }
    else {
      // Add Item To Storage
      this.storage.push(item);
    }
  };

  // Remove Item
  removeItem(item) {
    // Check If Item Exists In Storage
    if (this.hasItem(item)) {
      // Remove Item
      this.storage = this.storage.filter((index) => {
        return index !== item;
      });
    }
    else {
      console.log(`Set doesn't contain item (${item})`);
    }
  };

  // HELPER FUNCTIONS
  // Print
  print() {
    console.log(this.storage);
  };

  // Size
  size() {
    console.log(this.storage.length);
  };

  // Is Empty
  isEmpty() {
    if (this.storage.length === 0) {
      return true
    }
    else {
      return false;
    }
  };
};

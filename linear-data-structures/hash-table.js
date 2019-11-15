/*
Notes:
- Collisions
- Time Complexity: O(1)
- Space Complexity: 0(n)
*/


/*
Tests:
let hashTable = new HashTable();

console.log('Adding Items');
hashTable.addItem('beau', 'person');
hashTable.addItem('fido', 'dog');
hashTable.addItem('rex', 'dinosaur');
hashTable.addItem('tux', 'penguin')
console.log(' ');

console.log('Printing Hash Table');
hashTable.print();
console.log(' ');

console.log('Finding Items');
console.log(hashTable.findItem('tux'))
console.log(hashTable.findItem('rex'))

console.log(' ');

console.log('Removing Items');
hashTable.removeItem('Test');
hashTable.removeItem('fido');
hashTable.removeItem('beau');
console.log(' ');

console.log('Printing Hash Table');
hashTable.print();
console.log(' ');

hashTable.print();
*/


// Hash Table
class HashTable {
  constructor() {
    this.storage = [];
    this.bucketsLimit = 10;
  };

  // DATA FUNCTIONS
  // Hash (#1 Hashing Function)
  hash(key) {
    let hash = 0;

    // Iterate Over Key
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    // ASCII Divided By Buckets Limit
    hash = hash % this.bucketsLimit;
    
    // Return Hash
    console.log(`Hash: ${hash}`);
    return hash;
  };

  // Add Item (Resolve Collisions By Separate Chaining)
  addItem(key, value) {
    // Hash Key To Generate Index
    let index = this.hash(key);

    // Check If Bucket Is Empty
    if (this.storage[index] === undefined) {
      // Assign Key/Value To Bucket (EXTRA [] BRACKETS?)
      this.storage[index] = [[key, value]];
    }
    else {
      // Resolve Collisions (Separate Chaining)
      for (let i = 1; i < this.storage[index].length; i++) {
        // Check If What?
        if (this.storage[index][i] === undefined) {
          // Assign Key/Value To Bucket
          this.storage[index][i] = [key, value];
        }
        else {
          console.log('Iterating through bucket');
        }
      }
    }
  };

  // Remove Item
  removeItem(key) {
    // Hash Key To Generate Index
    let index = this.hash(key);

    // Check If Bucket Is Empty
    if (this.storage[index] === undefined) {
      console.log(`${key} was not found in the Hash Table`);
      return;
    }

    // Check If Bucket Has Key/Value Pairs
    if (this.storage[index].length >= 1) {
      // Iterate Over Bucket
      for (let i = 0; i < this.storage[index].length; i++) {
        // Check For Key Match
        if (this.storage[index][i][0] === key) {
          console.log(`Key found. Removing: ${this.storage[index][i][0]}`)
          return delete this.storage[index][i];
        }
        else {
          console.log('Key not found');
        }
      }
    }
  };

  // Retrieve Value
  retrieveValue(key) {
    // Hash Key To Generate Index
    let index = this.hash(key);

    // Check If Bucket Is Empty
    if (this.storage[index] === undefined) {
      console.log('Key not found');
      return;
    }

    // Iterate Over Bucket
    for (let i = 0; i < this.storage[index].length; i++) {
      // Check For Key Match
      if (this.storage[index][0] === key) {
        // Return Value
        return this.storage[index][i][1];
      }
    } 
  };

  // HELPER FUNCTIONS
  // Print Hash Table
  print() {
    console.log(this.storage);
  };
};

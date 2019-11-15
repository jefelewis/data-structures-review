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

  // Add Item (Resolve Collisions By Separate Chaining?)
  addItem(key, value) {
    // Hash Key To Generate Index
    let index = this.hash(key);

    // Check If Bucket Is Empty
    if (this.storage[index] === undefined) {
      // Assign Key/Value To Bucket
      this.storage[index] = [[key, value]];
    }
    else {
      // Separate Chaining
      // Inserted
      let inserted = false;

      // Iterate Over Bucket
      for (let i = 0; i < this.storage[index].length; i++) {
        // Check If Key Exists
        if (this.storage[index][i][0] === key) {
          // Update Value
          this.storage[index][i][1] = value;
          inserted = true;
        }
      }

      // Check If Not Inserted
      if (inserted === false) {
        // Insert Key/Value Pair
        this.storage[index].push([key, value]);
      }
    }
  };

  // Add Item (Resolve Collisions By Linear Probing)
  addItem(key, value) {
    // Hash Key To Generate Index
    let index = this.hash(key);

    // Check If Bucket Is Empty
    if (this.storage[index] === undefined) {
      // Assign Key/Value To Bucket
      this.storage[index] = [[key, value]];
    }
    else {
      // Linear Probing
      // Bucket Found
      let bucketFound = false;

      // Iterate Through Hash Table Buckets (From Index To End Of Storage)
      for (let i = this.hash(key); i < this.storage.length; i++) {
        // Check If Bucket Is Empty
        if (this.storage[i] === undefined) {
          // Assign Key/Value To Bucket
          this.storage[i] = [[key, value]];
          bucketFound = true;
          return;
        }
      }

      // Iterate Through Hash Table Buckets (From 0 To Index
      for (let i = 0; i < this.hash(key); i++) {
        // Check If Bucket Is Empty
        if (this.storage[i] === undefined) {
          // Assign Key/Value To Bucket
          this.storage[i] = [[key, value]];
          bucketFound = true;
          return;
        }
      }

      // Check If Inserted
      if (bucketFound === false) {
        console.log('Hash Table full');
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
      if (this.storage[index][i][0] === key) {
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

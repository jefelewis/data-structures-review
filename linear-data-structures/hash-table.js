/*
Notes:
- Collisions
- Time Complexity: O(1)
- Space Complexity: 0(n)
*/


/*
Tests:


*/


// Hash Table
class HashTable {
  constructor() {
    this.storage = [];
    this.bucketsLimit = 10;
  };

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

  // // Hash (#2 Hashing Function)
  // hash(key) {
  //   // Key Length Divided By Buckets Limit
  //   let hash = key.toString().length % this.bucketsLimit;
    
  //   // Return Hash
  //   console.log(`Hash: ${hash}`);
  //   return hash;
  // };

  // Add Element (Resolve Collisions By Separate Chaining)
  addElement(key, value) {
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

  // Find Element
  findElement(key) {
    // Hash Key To Generate Index
    let index = this.hash(key);

    // Check If There Is Bucket (Tuple)
    if (!this.storage[index]) {
      return null;
    }

    // Iterate
    for (let bucket of this.storage[index]) {
      // Check For Key Match
      if (bucket[0] === key) {
        // Return Value
        return bucket[1];
      }
    } 

  };




  // Add Element

  // Remove Element


  // View Hash Table
  viewHashTable() {
    return this.storage;
  };
};

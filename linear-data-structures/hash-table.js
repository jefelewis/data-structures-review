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

  // Add Element
  addElement(key, value) {
    // Hash Key To Generate Index
    let index = this.hash(key);
    // let index = this.hashTwo(key);

    // Check If Bucket Is Empty
    if (this.storage[index] === undefined) {
      // Assign Key/Value To Bucket (EXTRA [] BRACKETS?)
      this.storage[index] = [[key, value]];
    }
    else {
      // Inserted
      let inserted = false;

      
    }


    // if (!this.storage[index]) {
    //   this.storage[index] = [];
    // }

    // Push Key/Value Pair To Bucket (Tuple)
    this.storage[index].push([key, value]);

    // 
    // return index;
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

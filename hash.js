class HashTable {
    constructor() {
      this.values = {};
      this.length =  0;
      this.size =  0;
    }
  
    calculateHash(key) {
        // console.log('nan',key.length );
        // console.log('size',this.size);
      return key.length % this.size;
    }
  
    add(key, value) {
        
      const hash = this.calculateHash(key);
      console.log('this.values.hasOwnProperty(hash)',this.values.hasOwnProperty(hash));
      this.size++
      if (!this.values.hasOwnProperty(hash)) 
      {
        this.values[hash] = {};
      }
      if (!this.values[hash].hasOwnProperty(key)) {
         this.length++;
      }
      this.values[hash][key] = value;
   
    }
  
    search(key) {
       const hash = this.calculateHash(key);
       if (this.values.hasOwnProperty(hash) && this.values[hash].hasOwnProperty(key)) {
         return this.values[hash][key];
       } else {
         return null;
       }
    }
}
  //create object of type hash table
  const ht = new HashTable();
  //add data to the hash table ht
  ht.add("Canada", "300");
  ht.add("Germany", "100");
  ht.add("Italy", "50");
  ht.add("Spain", "60");
  console.log('hash------>',ht);
  console.log(ht.calculateHash("100"));
  //search
  console.log(ht.search("Italy"));
'use strict';
const Node = require('./node')
class Linkedlist{

    constructor(){
        this.head= null;
        this.size= 0;
    }

    insert(value){
        const newNode = new Node(value);
        console.log(this.head?true:false);
        console.log('value',value);
        if(this.head == null ) // (!this.head)
        {
          this.head = newNode;
        }
        else {
            let cur = this.head;
            while(cur.next)
            {
                cur=cur.next;//stay looping once last next be null
            }
            cur.next=newNode;   

        }
        this.size++;
        console.log('size',this.size);
    }
  
    toString(){// to print all linked list
     
        let str = [];
        let cur = this.head;
        str.push('{');
        str.push(cur.data)
        str.push('}')
        str.push('->');
        while(cur.next)
        { 
        cur = cur.next
        str.push('{');
        str.push(cur.data)
        str.push('}')
        str.push('->');
        }
        str.push('Null');
        let newarr = str.join('');

        return newarr;
        
    }
    include(value){
       let cur = this.head;
       while(cur){
           if(cur.data==value)
           return true
           else
           {
               cur=cur.next;
           }
       }
       return false

    }
}
const newLinked = new Linkedlist();
newLinked.insert('a');
newLinked.insert('b');
newLinked.insert('c');
newLinked.insert('d');


console.log(newLinked.toString());
console.log(newLinked.include('d'));
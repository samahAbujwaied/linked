'use strict';
const Node = require('./node')
class Linkedlist{

    constructor(){
        this.head= null;
        this.size= 0;
    }

    insert(value){// as add & append
        const newNode = new Node(value);
        // console.log(this.head?true:false);
        // console.log('value',value);
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
        // console.log('size',this.size);
    }

    append(value) {
        let tail = this.head;
        const newNOde = new Node(value)
        console.log(tail);
        while (tail) { 
          if (tail.next === null) {
            tail.next = newNOde;
            this.size++;
            return;
          }
          tail = tail.next;
        }
        
        return 'there is no head';
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
        //    console.log('------',cur.data);
           if(cur.data==value)
           return true
           else
           {
               cur=cur.next;
           }
       }
       return false

    }

    insertAfter(value,newvalue){
        console.log('value', value , 'newvalue', newvalue);
        const newNode = new Node(newvalue);
        let cur = this.head, prev;
        while(cur.next)
        {
            if(cur.data==value)
            {
                prev=cur;
                cur=cur.next;
                prev.next = newNode;
                newNode.next=cur;
                this.size++;
            }
            cur=cur.next;
        }
    }
    insertBefor(value,newvalue){
        const newNode = new Node(newvalue);
        let cur = this.head, prev;
        if(cur.data == value)
        {
            this.head = newNode;
            newNode.next=cur;
        }
        else {
            while(cur.next){
                prev=cur;
                cur=cur.next;
                if(cur.data == value)
                {
                    prev.next=newNode;
                    newNode.next=cur;
                    this.size++;

                }
            }
        }
    }


    
}
const newLinked = new Linkedlist();
newLinked.insert('b');
newLinked.insert('c');
newLinked.insert('a');
newLinked.insert('d');
newLinked.insert('a');
newLinked.append('f');
// console.log(newLinked.append('f'));

newLinked.insert('h');
console.log(newLinked.include('f'));
newLinked.insertAfter('b','s');
newLinked.insertBefor('b','n');
console.log(newLinked.toString());
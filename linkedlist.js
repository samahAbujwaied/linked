'use strict';
const Node = require('./node')
class Linkedlist{

    constructor(){
        this.head= null;
        this.size= 0;
    }

    insert(value){
        const newNode = new Node(value);
        if(!this.head) 
        {
          this.head = newNode;
        }
        else {
            let cur = this.head;
            while(cur.next)
            {
                cur=cur.next;
            }
            cur.next=newNode;   

        }
        this.size++;
    }

    append(value) {

      let cur = this.head;
      let newNode = new Node(value);
      if(cur)
      {while(cur.next)
      {
          cur=cur.next;
      }
      cur.next = newNode;
      this.size++;}


        // let tail = this.head;
        // const newNOde = new Node(value)
        // console.log(tail);
        // while (tail) { 
        //   if (tail.next === null) {
        //     tail.next = newNOde;
        //     this.size++;
        //     return;
        //   }
        //   tail = tail.next;
        // }
        
        // return 'there is no head';
      }
  
    toString(){// to print all linked list
        let str = [];
        let cur = this.head;
     
        while(cur)
        { 
            str.push('{');
            str.push(cur.data)
            str.push('}')
            str.push('->');
            cur = cur.next
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

    insertAfter(value,newvalue){
        console.log('value', value , 'newvalue', newvalue);
        const newNode = new Node(newvalue);
        let cur = this.head, prev;
        if(!cur.next){
            cur.next =newNode;
        }
        else
        {
            while(cur.next)
            {
                if(cur.data==value)
                {
                    prev=cur;
                    cur=cur.next;
                    prev.next = newNode;
                    newNode.next=cur;
                    
                }
                cur=cur.next;     } }
        this.size++;
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
    printList() { // like tostring
        let cur = this.head, str = ""
        while (cur) {
            str = str + cur.data + " ";
            cur = cur.next
        }
        return str
    }

    
}
const newLinked = new Linkedlist();
newLinked.insert('b');
newLinked.insertAfter('b','s');
newLinked.append('f');
newLinked.insert('c');
newLinked.insert('a');
newLinked.insert('d');
newLinked.insert('a');
newLinked.insert('h');

console.log(newLinked.include('f'));
newLinked.insertAfter('b','s');
newLinked.insertBefor('b','n');
console.log(newLinked.toString());
console.log(newLinked.printList());
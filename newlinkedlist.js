'use strict'
const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }


    addelementAt(element, index) {
        if (index < 0 || index > this.size)
            return 'sorry enter valid index';
        else {
            let newNode = new Node(element);
            if (index == 0) {
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                let prev, cur = this.head, count = 0;
                while (count < index) {
                    count++;
                    prev = cur;
                    cur = cur.next;

                }
                prev.next = newNode;
                newNode.next = cur;
            }
            this.size++
        }
    }
    removeFrom(index) {
        if (index < 0 || index > this.size)
            return 'sorry enter valid index';
        else {
            if (index == 0)
                this.head = this.head.next;
            else {
                let cur = this.head, prev, count = 0;
                while (count < index) {
                    count++;
                    prev = cur;
                    cur = cur.next;
                }
                cur = cur.next;
                prev.next = cur;
            }
            this.size--;
        }

    }

    removeElement(element) {
        let cur = this.head, prev;

        if (this.head.element == element) {
            this.head = this.head.next;
            this.size--;
        }
        else {
            while (cur.next) {
                prev = cur;
                cur = cur.next;
                if (cur.element == element) {
                    cur = cur.next;
                    prev.next = cur;
                    this.size--;
                }

            }
        }
    }
    indexOf(element) { //like incloud
        let cur = this.head, index = 0;
        while (cur.next) {
            index++;
            if (cur.element == element)
                return index;
            else {
                cur = cur.next;
            }
        }
        return false
    }

    isEmpty() {
        return this.size == 0;
    }

    sizeList() {
        return this.size
    }

    printList() { // like tostring
        let cur = this.head, str = ""
        while (cur) {
            str = str + cur.element + " ";
            cur = cur.next
        }
        return str
    }

    kthFromEnd(k) {
        let value = this.size - k;
        let count = 0;
        let cur = this.head
        console.log('hi', cur.element);
        if (k < 0 || k > this.size) { return 'Exception' }
        else {
            while (count < value - 1) {
                count++;
                console.log(count);
                cur = cur.next;
                console.log(cur.element);
            }
            return (cur.element)
        }
    }
   
    reverse(){
        let prev = null
        let current = this.head
        let next = current ? current.next : null
        while(current){
            this.head=current;
            next=current.next;
            current.next=prev;
            prev=current
            current=next;
            
        }
        return this.head
       
    }
    palindrome(linkedlist){
        let p , q ,secondLL;
        p=q=this.head;
        let size = linkedlist.sizeList()
        console.log(size);
        size = size/2;
        console.log(size);
        while(p){
            p=p.next.next;
            console.log('[[[[[[[',p);
            if(!p.next)
            {
                secondLL=q.next.next; 
                console.log('secooooo',secondLL);
                 break;
               
            }
            if(!p){
                secondLL=q.next;
                console.log('secooooo44444',secondLL);
                break;
            }
        }
        q.next=null

    }
}
const zipList =  (linkedlist1, linkedlist2)=> {
    // [1,2,3,4,5]
    // [6,7,8,9,10]
    // [1,2,3,4,5,6,7,8,9,10]
    //1,2,2,7,3,8,4,
    // linked list  ==> linear
    // tree & graph ==>non-linear
    if (linkedlist1.length === 0 || linkedlist2.length === 0) {
        return 'Exception';
    }
    console.log('onnnn');
    let cur1 = linkedlist1.head;
    let cur2 = linkedlist2.head;

    let linkedlist1Length = linkedlist1.sizeList();
    let linkedlist2Length = linkedlist2.sizeList();
    console.log('length1',linkedlist1Length);
    console.log('length2',linkedlist2Length );
    while (cur1 && cur2.next) {
        console.log('inn');
        linkedlist1.insertAfter(cur1.element, cur2.element);

        cur1 = cur1.next.next;
        cur2 = cur2.next;
    }
    if (linkedlist1Length === linkedlist2Length || (linkedlist1Length < linkedlist2Length)) {
        linkedlist1.addelement(cur2.element);
    } else if (linkedlist1Length > linkedlist2Length) {
        linkedlist1.insertAfter(cur1.element, cur2.element);
    }
    return linkedlist1;
}

const add = new LinkedList();
add.addelement(1);
add.addelement(2);
add.addelement(3);
add.addelement(4);
add.addelement(5);
add.addelement(6);
add.addelement(7);
add.addelement(8);
add.addelement(9);
add.addelement(10);
add.addelement(11);
const add2 = new LinkedList();
add2.addelement(12);
add2.addelement(13);
add2.addelement(14);
add2.addelement(15);
add2.addelement(16);
add2.addelement(17);
add2.addelement(18);
add2.addelement(19);
const list3 = new LinkedList();
list3.addelement('a');
list3.addelement('b');
list3.addelement('c')
list3.reverse()
console.log('reeee',list3.printList());

console.log(zipList(add,add2).printList());
const palindrom =  new LinkedList();
// [t]->[a]->[c]->[o]->[c]->[a]->[t]
palindrom.addelement('t');
palindrom.addelement('a');
palindrom.addelement('o');
palindrom.addelement('a');
palindrom.addelement('t');
console.log(palindrom.palindrome(palindrom));
// console.log('===>', add);
// console.log('===>', add.head.next.next);
// add.removeFrom(2);
// console.log(add);
// add.removeElement(-1);
// console.log(add);
// console.log('hhiiii',add.indexOf(10));
// console.log(add.isEmpty());
// console.log(add.sizeList());
// console.log('list===========>',add.printList());

module.exports = LinkedList;
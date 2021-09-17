'use strict';
const Node = require('./node')
class Linkedlist {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    insert(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
        }
        else {
            let cur = this.head;
            while (cur.next) {
                cur = cur.next;
            }
            cur.next = newNode;

        }
        this.size++;
    }

    append(value) {

        let cur = this.head;
        let newNode = new Node(value);
        if (cur) {
            while (cur.next) {
                cur = cur.next;
            }
            cur.next = newNode;
            this.size++;
        }

    }

    toString() {// to print all linked list
        let str = [];
        let cur = this.head;

        while (cur) {
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

    include(value) {
        let cur = this.head;
        while (cur) {
            if (cur.data == value)
                return true
            else {
                cur = cur.next;
            }
        }
        return false

    }

    insertAfter(value, newvalue) {
        const newNode = new Node(newvalue);
        let cur = this.head, prev;
        if (!cur.next) {
            cur.next = newNode;
        }
        else {
            while (cur) {
                if (cur.data == value) {
                    prev = cur;
                    cur = cur.next;
                    prev.next = newNode;
                    newNode.next = cur;

                }
                cur = cur.next;
            }
        }
        this.size++;
    }
    insertBefor(value, newvalue) {
        const newNode = new Node(newvalue);
        let cur = this.head, prev;
        if (cur.data == value) {
            this.head = newNode;
            newNode.next = cur;
        }
        else {
            while (cur.next) {
                prev = cur;
                cur = cur.next;
                if (cur.data == value) {
                    prev.next = newNode;
                    newNode.next = cur;


                }
            }
        }
        this.size++;
    }

    insertMiddle(value) {
        let newNode = new Node(value);
        let cur = this.head, prev;
        let mid = Math.floor(this.size / 2);
        let count = 1;
        while (count < mid) {
            count++; //to let you know you are in which node 
            prev = cur;
            cur = cur.next;

        }
        prev.next = newNode;
        newNode.next = cur;
        this.size++;

    }

    addelementAt(value, index)//to add new node on spicific index
    {
        if (index < 0 || index > this.size) {
            return ' please enter right position ';
        }
        else {
            let newNode = new Node(value);
            let cur = this.head, prev;
            let count = 1
            if (count == index) {
                this.head = newNode;
                newNode.next = cur;

            }
            else {
                while (cur.next) {
                    prev = cur;
                    cur = cur.next;
                    count++;
                    if (index == count) {
                        prev.next = newNode;
                        newNode.next = cur;
                    }
                }
            }
            this.size++;
        }
    }
    addelementAt2(element, index) {
        if (index < 0 || index > this.size)
            return 'sorry enter valid index';
        else {
            let newNode = new Node(element);
            if (index == 1) {
                newNode.next = this.head;
                this.head = newNode;
            }
            else {
                let prev, cur = this.head, count = 1;
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

    printList() {
        let cur = this.head, str = ""
        while (cur) {
            str = str + cur.data + " ";
            cur = cur.next
        }
        return str
    }

    kthFromEnd(k) {
        let value = this.size - k;
        let count = 0;
        let cur = this.head;
        if (k < 1 || k > this.size) { return 'Exception' }
        else {
            while (count < value) {
                count++;
                cur = cur.next;
            }
            return (cur.data)
        }
    }


    reverse() {
        let prev = null, current = this.head
        let next = current ? current.next : null
        while (current) {
            this.head = current;
            next = current.next;
            current.next = prev;
            prev = current
            current = next;

        }
        return this.head

    }
    sizeList() {
        return this.size
    }

}

const zipList = (linkedlist1, linkedlist2) => {

    if (linkedlist1.length === 0 || linkedlist2.length === 0) {
        return 'Exception';
    }
    let cur1 = linkedlist1.head;
    let cur2 = linkedlist2.head;

    let linkedlist1Length = linkedlist1.sizeList();
    let linkedlist2Length = linkedlist2.sizeList();
    while (cur1 && cur2.next) {
        linkedlist1.insertAfter(cur1.data, cur2.data);
        cur1 = cur1.next.next;
        cur2 = cur2.next;
    }
    if (linkedlist1Length === linkedlist2Length || (linkedlist1Length < linkedlist2Length)) {
        linkedlist1.insert(cur2.data);
    } else if (linkedlist1Length > linkedlist2Length) {

        linkedlist1.insertAfter(cur1.data, cur2.data);
    }
    return linkedlist1.toString();
}

const newLinked = new Linkedlist();
const newLinked1 = new Linkedlist();
newLinked.insert(4);
newLinked.append(5);
newLinked.insert(6);
newLinked.insert(27);
newLinked.insertAfter(1, 10);
newLinked1.insert(4);
newLinked1.insert(5);
newLinked1.insert(26);
newLinked1.insert(8)
console.log(newLinked.kthFromEnd(5));
newLinked.addelementAt2('noor', 5)

console.log('ziplinkedlist', zipList(newLinked, newLinked1));


let new1 = new Linkedlist();
let new2  = new Linkedlist();
new1.insert(1);
new1.insert(5);
new1.insert(4);
new2.insert(10);
new2.insert(3);
new2.insert(6);


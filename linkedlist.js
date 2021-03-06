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
        let newNode = new Node(newvalue);
        let cur = this.head, prev;
        while (cur) {
            if (cur.data == value) {
                prev = cur;
                cur = cur.next;
                prev.next = newNode;
                newNode.next = cur
            }
            if (cur)
                cur = cur.next;
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
    isEmpty() {
        return this.size == 0;
    }
    isPalindrome() {
        let valuesFound = [];
        let cur = this.head
        // console.log('cur ---',cur);
        while (cur) {
            valuesFound.push(cur.data);
            cur = cur.next;
        }
        let left = 0;
        let right = valuesFound.length - 1;
        while (left <= right) {
            if (valuesFound[left] !== valuesFound[right]) {
                return false;
            }
            left++, right--;
        }

        return true;
    };

    removeDuplicatNode() {
        let cur = this.head, prev;
        while (cur) {
            prev = cur;
            cur = cur.next
                    while(prev.data == cur.data)
                    {
                        cur=cur.next;
                        if(!cur)
                        break;
                    }
                prev.next=cur;
        }
        return this.head;
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

    

}
let removeElements = function (head, val) {

    let cur = head.head;
    let prev = cur;

    while (cur) {
        if (cur.data == val) {

            console.log('val----', cur.data);
            cur = cur.next;
            prev.next = cur;


        }
        else {
            prev = cur;
            cur = cur.next;
        }


    }

    return head;
};







const zipList = (list1, list2) => {
    if (!list1.sizeList() || !list2.sizeList()) {
        return 'Exception';
    }
    let cur1 = list1.head;
    let cur2 = list2.head;
    const list3 = new Linkedlist();
    while (cur1 || cur2) {
        if (cur1) {
            list3.insert(cur1.data)
            if (cur2)
                list3.insertAfter(cur1.data, cur2.data);
            cur1 = cur1.next;
            if (cur2)
                cur2 = cur2.next
        }
        else
            if (cur2) {
                list3.insert(cur2.data);
                cur2 = cur2.next;
            }
    }
    return list3.toString();
} 

const newLinked  = new Linkedlist();
const newLinked1 = new Linkedlist();
newLinked.insert(1);
newLinked.insert(1);
newLinked.insert(1);
newLinked.insert(1);
newLinked.insert(2);
newLinked.insert(3);
newLinked.insert(3);
newLinked.insert(3);
newLinked.insert(7);
newLinked.insert(7);
newLinked.insert(7);
newLinked.insert(7);
newLinked.insert(7);
// newLinked.insert(7);
console.log('duplicate-------->', newLinked.removeDuplicatNode());
console.log('duuuuuuuuuuuuuuuuuuuuuuuuu', newLinked.toString());

// newLinked1.insert(7);
// newLinked1.insert(7);
// newLinked1.insert(7);
// newLinked1.insert(7);

// console.log(newLinked1.isPalindrome());
// console.log('ziplinkedlist', zipList(newLinked, newLinked1));
// console.log('removeElements',removeElements(newLinked1,7));
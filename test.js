'use strict'
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }
    insertNode(value) {
        let cur = this.head;
        let newNOde = new Node(value);
        if (!cur) {
            this.head = newNOde;
        }
        else {
            while (cur.next) {
                cur = cur.next
            }
            cur.next = newNOde
        }
        this.size++;
    }

    Print() {
        let cur = this.head;
        let result = [];
        while (cur) {
            result.push('{', cur.data, '}', '->');
            cur = cur.next;
        }
        result.push('NULL');
        return result.join('')
    }
    include(value) {
        let cur = this.head;
        console.log('inclued', cur);
        while (cur) {
            if (cur.data == value)
                return true;
            cur = cur.next;
        }
        return false;
    }
    insertAfter(value, newValue) {
        let cur = this.head, prev = cur;
        let newNode = new Node(newValue);
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
    insertBefore(value, newValue) {
        let cur = this.head, prev = cur;
        let newNode = new Node(newValue);
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
    insertMiddle(newValue) {
        let cur = this.head, prev = cur, count = 0, mid = Math.ceil(this.size / 2);
        let newNode = new Node(newValue);
        while (count < mid) {
            count++;
            prev = cur;
            cur = cur.next;
        }
        prev.next = newNode;
        newNode.next = cur;
        this.size++;
    }
    sizeList() {
        return this.size;
    }
    addElementAt(idx, newValue) {
        let cur = this.head, prev = cur, count = 1;
        let newNode = new Node(newValue);
        if (idx <= 0 || idx > this.size + 1)
            return 'Exception';
        if (idx == 1) {
            this.head = newNode;
            newNode.next = cur
        } else {
            while (count < idx) {
                count++;
                prev = cur;
                cur = cur.next

            }
            prev.next = newNode;
            newNode.next = cur;
        }
        this.size++;
    }
    isEmpty() {
        return this.size == 0
    }
    kthFromEnd(k) {
        if (k <= 0 || k > this.size)
            return 'Exception';
        let cur = this.head, value = this.size - k, count = 0;
        while (count < value) {
            count++;
            cur = cur.next;
        }
        return cur.data;
    }
    reverse() {
        let cur = this.head, prev = null, next = cur ? cur.next : null;
        while (cur) {
            this.head = cur;
            next = cur.next;
            cur.next = prev;
            prev = cur;
            cur = next;
        }
    }
    isPalindrome() {
        let cur = this.head, result = [];
        while (cur) {
            result.push(cur.data);
            cur = cur.next;
        }
        let left = 0, right = result.length - 1;
        while (left < right) {
            if (result[left] !== result[right])
                return false;
            left++, right--;
        }
        return true;
    }
    indexOf(value) {
        let cur = this.head, count = 0;
        while (cur) {
            count++;
            if (cur.data == value)
                return count;
            cur = cur.next;
        }
        return 'Not exist';

    }
    removeElement(value) {
        let cur = this.head, prev = cur;
        if (cur.data == value) {
            while (cur.data == value) {
                cur = cur.next;
                this.head = cur;
            }
        }
        while (cur) {
            while (cur.data == value) {
                cur = cur.next;
                prev.next = cur;
                if (!cur)
                    break;
            }
            prev = cur;
            if (cur)
                cur = cur.next;
        }
        this.size--;
        return this.head
    }


    removeFrom(idx) {
        let cur = this.head, prev = cur, count = 1;
        if (idx <= 0 || idx > this.size)
            return 'Exception'
        if (idx == 1) {
            cur = cur.next;
            this.head = cur
        }
        else {
            while (count < idx) {
                count++;
                prev = cur;
                if (cur)
                    cur = cur.next;
            }
            if (cur) {
                cur = cur.next;
                prev.next = cur;
            }

        }
        this.size--;
    }
    removeDuplicateNode() {
        let cur = this.head, prev = cur;
        while (cur) {
            prev = cur;
            cur = cur.next;
            if (cur)
                while (prev.data == cur.data) {
                    cur = cur.next
                    if (!cur)
                        break;
                }
            prev.next = cur;
        }
        this.size--;
    }

    indexOf1(value) {
        if (value <= 0 || value > this.size)
            return 'Exception';
        let cur = this.head
        let count = 0;
        while (cur) {
            count++;
            if (cur.data == value)
                return count;
            cur = cur.next
        }
    }
    minmaxValue() {
        let cur = this.head;
        let min = cur.data;
        let max = cur.data;
        while (cur) {
            if (cur.data < min)
                min = cur.data
            if (cur.data > max)
                max = cur.data

            cur = cur.next;
        }
        console.log('min-->',min , 'max---->',max);
        let result = {
            max,min
        }
    return result;
    }}
let zipList = (l1, l2) => {
    if (l1.sizeList() <= 0 || l2.sizeList() <= 0)
        return 'Exception';
    let cur1 = l1.head;
    let cur2 = l2.head;
    let list3 = new LinkedList();
    while (cur1 || cur2) {
        if (cur1) {
            list3.insertNode(cur1.data);
            if (cur2) {
                list3.insertAfter(cur1.data, cur2.data);
                cur2 = cur2.next
            }
            cur1 = cur1.next;
        } else
            if (cur2) {
                list3.insertNode(cur2.data);
                cur2 = cur2.next;
            }

    }
    return list3.Print();


}
let mergeSortTwoLinkedList = (l1, l2) => {
    if (l1.sizeList() <= 0 || l2.sizeList() <= 0)
        return 'Exception';
    let cur1 = l1.head;
    let cur2 = l2.head;
    let prev1 = cur1;
    let prev2 = cur2;
    let list3 = new LinkedList();
    while (cur1.next || cur2.next) {
        if (cur1.data <= cur2.data) {
            list3.insertNode(cur1.data)
            cur1 = cur1.next;
            prev1 = cur1
        }
        else {
            list3.insertNode(cur2.data);
            cur2 = cur2.next
            prev2 = cur2
        }

    }
    if (prev1 && prev2) {
        if (prev1.data < prev2.data) {
            list3.insertNode(prev1.data);
            prev1 = prev1.next
        }
        else {
            list3.insertNode(prev2.data);
            prev2 = prev2.next
        }
    }
    if (prev1)
        list3.insertNode(prev1.data);

    if (prev2)
        list3.insertNode(prev2.data)
    return list3.Print();


}

let list1 = new LinkedList();
let list2 = new LinkedList();

console.log('empty--->', list1.isEmpty());
list1.insertNode(3);
list1.insertNode(10);
list1.insertNode(10);
list1.insertNode(10);
list1.insertNode(17);
list1.insertNode(18);
list1.insertNode(8);
list1.insertNode(1);
list1.insertNode(50);
list1.insertNode(25);
list1.insertNode(25);
list1.insertNode(25);
list1.insertNode(25);
console.log('minngfffff',list1.minmaxValue());
console.log('index of ', list1.indexOf1(10));
console.log(list1.removeElement(25));
console.log(list1.Print());
// list1.insertNode(1);
// list1.insertNode(1);
// list1.insertNode(2);
// list1.insertNode(3);
// list1.insertNode(15);
// list1.insertNode(3);
// list1.insertNode(3);
// list1.insertNode(2);
// list1.insertNode(1);
// list2.insertNode(5);
// list2.insertNode(6);
// list2.insertNode(9);
// list2.insertNode(11);
// list2.insertNode(12);

// list2.insertNode(11);

// console.log('zip list =====>', zipList(list1, list2));
// console.log('mergeSortTwoLinkedList', mergeSortTwoLinkedList(list1, list2));
// console.log('include --->', list1.include(1));
// list1.insertAfter(3,4);
// list1.insertBefore(4,5);
// list1.insertMiddle(10);
// console.log('add element at ,',list1.addElementAt(6,11));
// console.log('size list ',list1.sizeList());
// console.log('is empty ',list1.isEmpty());
// console.log('kth from end' , list1.kthFromEnd(8));
// console.log(list1.Print());
// console.log(list1.isPalindrome());
// console.log('index of --->',list1.indexOf(4));

// console.log('remove element',list1.removeElement(1));
// console.log(list1.Print());

// console.log('remode index ', list1.removeFrom(6));
// list1.reverse();
// console.log(list1.removeDuplicateNode());
// console.log(list1.Print());


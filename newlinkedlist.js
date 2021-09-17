'use strict'
const Node = require('./node')

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
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



module.exports = LinkedList;
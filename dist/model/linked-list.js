"use strict";
/*
* Author: Kurt Bruns
* Date: 2020 12 05
*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
/**
* A node class contains data and a recursive next point.
*/
class Node {
    /**
    Constructs a new node with the provided data and sets next to be null.
    */
    constructor(data) {
        this.data = data;
        this.next = null;
    }
    /**
    * Returns the string representation of the data.
    */
    toString() {
        return this.data.toString();
    }
}
/**
* A dynamic, singlely linked list.
*/
class LinkedList {
    /**
    Consstructs an empty linked list.
    */
    constructor() {
        this.head = null;
        this.count = 0;
    }
    /**
    Inserts a node at the beginning of the list
    */
    insert(element) {
        if (this.head == null) {
            this.head = new Node(element);
        }
        else {
            let temp = this.head;
            this.head = new Node(element);
            this.head.next = temp;
        }
        this.count++;
    }
    /**
    Returns the first element in the list, or null if the list is empty.
    */
    first() {
        if (this.head != null) {
            return this.head.data;
        }
        else {
            return null;
        }
    }
    /**
    * Removes the first element in the list. Returns true if element was successfully removed,
    * false otherwise.
    */
    remove() {
        if (this.head != null) {
            this.head = this.head.next;
            this.count--;
            return true;
        }
        else {
            return false;
        }
    }
    /**
     * Returns the number of elements contained within the linked list.
     */
    size() {
        return this.count;
    }
    /**
    * Prints out the string reprsentation of this linked list.
    */
    toString() {
        let current = this.head;
        let str = '';
        while (current != null) {
            str += current.toString() + ' ';
            current = current.next;
        }
        return str.substr(0, str.length - 1);
    }
    /**
    Returns an iterator over the elements in the list
    */
    [Symbol.iterator]() {
        let current = this.head;
        const iterator = {
            next() {
                if (current == null) {
                    return {
                        done: true,
                        value: undefined
                    };
                }
                else {
                    let data = current.data;
                    current = current.next;
                    return {
                        done: false,
                        value: data
                    };
                }
            }
        };
        return iterator;
    }
}
exports.LinkedList = LinkedList;
//# sourceMappingURL=linked-list.js.map
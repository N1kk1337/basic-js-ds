const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.start = null;
    this.end = null;
  }

  getUnderlyingList() {
    return this.start;
  }

  enqueue(value) {
    //this.arr.unshift(value);
    let newNode = new ListNode(value);

    if (this.end === null) {
      this.start = newNode;
      this.end = newNode;
    } else {
      this.end.next = newNode;
      this.end = newNode;
    }
  }

  dequeue() {
    //let last = this.arr[this.arr.length - 1];

    if (this.start == null) return null;

    let tempNode = this.start;
    this.start = this.start.next;

    if (this.start == null) {
      this.end = null;
    }

    //return this.arr.pop();
    return tempNode.value;
  }
}

class ListNode {
  constructor(x) {
    this.value = x;
    this.next = null;
  }
}

module.exports = {
  Queue,
};

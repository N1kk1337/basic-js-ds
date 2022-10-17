const { NotImplementedError } = require("../extensions/index.js");

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  let start = l;
  //console.log(start);
  let arr = [];
  do {
    arr.push(l);
    l = l.next;
  } while (l?.value);
  console.log(arr);
  let prev = l;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i].value === k) {
      if (i === 0) {
        start = arr[i].next;
      } else {
        prev.next = arr[i].next;
        //console.log(arr);
      }
    } else {
      prev = arr[i];
    }
  }
  //console.log(arr);
  //console.log(start);

  // arr = [];
  // do {
  //   arr.push(start);
  //   start = start.next;
  // } while (start?.value);
  // console.log(arr);
  return start;
}

module.exports = {
  removeKFromList,
};

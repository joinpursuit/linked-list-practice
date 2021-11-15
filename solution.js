const { nums, words } = require("./data/data.js");

const panagram = [
  "The",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = null;
    this.length = 0;
  }

  // - `insert`
  insert(data) {
    let newNode = new Node(data);

    if (this.head === null) {
      this.head = newNode;
    } else {
      let node = this.head;
      while (node.next) {
        node = node.next;
      }
      node.next = newNode;
    }
  }

  // - `size`
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  // - `delete` by key
  delete(key) {
    let i = 0;
    let current = this.head;
    if (!key) {
      current = this.head.next;
      this.head = current;
    } else {
      let node = this.head;
      while (i < key) {
        node = node.next;
        i++;
      }
      node.next = node.next.next;
    }
  }

  // - `getFirst` element
  // - `getLast` element
  // - `search` an element by key and return data
  // - `getKth` retrieve kth element
  // - `getKthToLast` retrieve kth from last element
  // - `isEmpty` check if list is empty
  // - `clear` the linked list
  // - `toArray`convert data from linked list to an array
  // - `containsDuplicates` check for duplicates - return true if contains duplicates, false if not
}

module.exports = {
  Node,
  LinkedList,
};

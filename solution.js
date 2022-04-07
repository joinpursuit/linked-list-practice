const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data ? data : null;
    this.next = next ? next : null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  delete(key) {
    let node = this.head;
    if (node.data === key) {
      node = node.next;
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let lastNode = this.head;
    if (lastNode) {
      while (lastNode.next) {
        lastNode = lastNode.next;
      }
    }
    return lastNode;
  }

  //search an element by key and return data
  search(key) {
    if (this.head === key) {
      return this.head;
    }
  }

  // getKth() {}

  // getKthToLast() {}

  isEmpty() {
    return this.head ? false : true;
  }

  clear() {
    return (this.head = null);
  }

  toArray() {
    let arr = [];
    let node = this.head;
    while (node.next) {
      arr.push(node.data);
      node = node.next;
    }
    arr.push(node.data);
    return arr;
  }

  containsDuplicates() {}
}

module.exports = {
  Node,
  LinkedList,
};

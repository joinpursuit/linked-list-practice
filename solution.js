const { nums, words } = require('./data/data.js');
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  insert(value) {
    let nodeToInsert = new Node(value);

    if (!this.head) {
      this.head = nodeToInsert;
      return;
    } else {
      nodeToInsert.next = this.head;
      this.head = nodeToInsert;
    }
  }
  getFirstAndRemove() {
    let oldHead = this.head;
    this.head = this.head.next;

    return oldHead;
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
  delete(data) {
    let node = this.head;
    let counter = 0;
    while (node.data !== data && node.next) {
      counter++;
      node = node.next;
    }
    let selectNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++) {
      node = node.next;
    }

    node.next = selectNode.next;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    if (!this.head) {
      return null;
    }
    while (node.next) {
      node = node.next;
    }
    return node;
  }
  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }
}

module.exports = {
  Node,
  LinkedList,
};

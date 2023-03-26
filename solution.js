const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data, next) {
    const node = new Node(data, next);
    node.next = this.head;
    this.head = node;
  }

  size() {
    let pointer = this.head;
    let count = 0;
    while (pointer != null) {
      count++;
      pointer = pointer.next;
    }
    return count;
  }

  delete(key) {
    let currentNode = this.head;
    let prevNode = this.head;
    while (currentNode.next != null) {
      if (currentNode.data == key) {
        const nextNode = currentNode.next;
        prevNode.next = nextNode;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node.next != null) {
      node = node.next;
    }
    return node;
  }
}

module.exports = {
  Node,
  LinkedList,
};

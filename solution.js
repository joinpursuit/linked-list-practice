const { nums, words } = require("./data/data.js");

class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    let node = new Node(data);
    if (this.head === null) {
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }

  size() {
    let counter = 0;
    let node = this.head;
    while (node !== null) {
      node = node.next;
      ++counter;
    }
    return counter;
  }

  delete(data) {
    let node = this.head;
    if (node.data === data) {
      this.head = this.head.next;
      return true;
    }
    while (node !== null) {
      if (node.next.data === data) {
        node.next = node.next.next;
        return true;
      }
      node = node.next;
    }
    return false;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode.next !== null) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  search(data) {
    let node = this.head;
    while (node !== null) {
      if (node.data === data) {
        return node;
      }
      node = node.next;
    }
  }

  getKth(index) {
    let node = this.head;
    for (let i = index; i > 1; i--) {
      node = node.next;
    }
    return node;
  }

  getKthToLast(number) {
    let index = this.size() - number;
    let node = this.head;
    for (let i = index; i > 1; i--) {
      node = node.next;
    }
    return node;
  }

  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let linkedListArr = [];
    let node = this.head;
    const length = this.size();
    for (let i = 0; i < length; i++) {
      linkedListArr.push(node.data);
      node = node.next;
    }
    return linkedListArr;
  }

  containsDuplicates() {
    let array = [];
    let node = this.head;
    let length = this.size();
    for (let i = 0; i < length; i++) {
      if (array.includes(node.data)) {
        return true;
      } else {
        array.push(node.data);
        node = node.next;
      }
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};

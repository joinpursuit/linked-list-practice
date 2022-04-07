const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.length = 0;
  }

  insert(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let newNode = this.head;
    while (newNode) {
      count++;
      newNode = newNode.next;
    }
    return count;
  }

  delete(index) {
    let current = this.head;
    let previous = null;

    if (current !== null && current.data === index) {
      head = current.next;
      return;
    }

    while (current !== null && current.data !== index) {
      previous = current;
      current = current.next;
    }

    if (current.data === index) {
      previous.next = current.next;
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    while (current.next) {
      current = current.next;
    }
    return current;
  }

  search(data) {
    let current = this.head;
    while (current.next !== null) {
      if (current.data === data) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  getKth(k) {
    let current = this.head;
    for (let i = 1; i < k; i += 1) {
      current = current.next;
    }
    return current;
  }

  getKthToLast(k) {
    let current = this.head;
    for (let i = 2; i <= this.size() - k; i += 1) {
      current = current.next;
    }
    return current;
  }

  isEmpty() {
    return this.head === null;
  }

  clear() {
    return (this.head = null);
  }

  toArray() {
    let array = [];
    let current = this.head;

    while (current !== null) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }

  containsDuplicates() {
    let current = this.head;
    let hash = {};
    while (current !== null) {
      if (hash[current.data]) {
        return true;
      }
      hash[current.data] = true;
      current = current.next;
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};

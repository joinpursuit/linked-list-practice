const { nums, words } = require('./data/data.js');

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
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
    let current = this.head;
    let previous = null;
    if (current.data === key) {
      this.head = this.head.next;
      return;
    }
    while (current != null && current.data != key) {
      //iterate until key found
      previous = current;
      current = current.next;
    }
    if (current === null) {
      return 'node not found';
    }

    previous.next = current.next;
    return this.head;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) return null;
    let node = this.head;

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

  getKth(k) {
    let index = 0;
    let node = this.head;
    while (node !== null) {
      index++;
      if (index === k) break;
      node = node.next;
    }
    return node;
  }

  getKthToLast(value) {
    let node = this.head;
    const index = this.size() - value;
    for (let i = index - 1; i > 0; i--) {
      node = node.next;
    }
    return node;
  }

  isEmpty() {
    return !this.head;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let arr = [];
    let node = this.head;

    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
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

const { nums, words } = require("./data/data.js");

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

  insert(value) {
    let newNode = new Node(value);

    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  delete(data) {
    let currentNode = this.head;
    let counter = 0;

    while (currentNode.data !== data && currentNode.next) {
      counter++;
      currentNode = currentNode.next;
    }
    let deleteNode = currentNode;
    currentNode = this.head;

    for (let i = 1; i < counter; i++) {
      currentNode = currentNode.next;
    }

    currentNode.next = deleteNode.next;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }

  search(key) {
    let node = this.head;
    while (node) {
      if (node.data === key) {
        return node;
      }
      node = node.next;
    }
  }

  getKth(index) {
    let current = this.head;
    for (let i = 1; i < index; i++) {
      current = current.next;
    }
    return current;
  }

  getKthToLast(index) {
    return this.getKth(this.size() - index);
  }

  isEmpty() {
    return this.head === undefined;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let returnArr = [];
    let current = this.head;
    while (current) {
      returnArr.push(current.data);
      current = current.next;
    }
    return returnArr;
  }

  containsDuplicates() {
    const array = this.toArray();
    let set = new Set(array);
    if (set.size === array.length) {
      return false;
    }
    return true;
  }
}

module.exports = {
  Node,
  LinkedList,
};

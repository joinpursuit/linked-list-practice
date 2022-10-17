const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
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

  getKth(k) {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      if (count === k) {
        return node;
      }
      node = node.next;
    }
  }

  getKthToLast(k) {
    let index = this.size() - k;
    return this.getKth(index);
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let node = this.head;
    const array = [];
    while (node) {
      array.push(node.data);
      node = node.next;
    }
    return array;
  }

  containsDuplicates() {
    const array = this.toArray();
    let set = new Set(array);
    if (set.size == array.length) {
      return false;
    }
    return true;
  }
}

module.exports = {
  Node,
  LinkedList,
};

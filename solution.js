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
  delete(data) {
    let node = this.head;
    let counter = 0;
    while (node.data !== data && node.next) {
      counter++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    if (!this.head) return null;
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
  getKth(value) {
    let node = this.head;
    let count = 1;
    while (count < value) {
      count++;
      node = node.next;
    }
    return node;
  }
  getKthToLast(value) {
    let size = this.size() - value;
    return this.getKth(size);
  }

  isEmpty() {
    return !this.size();
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
    let node = this.head;
    let duplicates = {};
    while (node) {
      if (duplicates[node.data]) {
        return true;
      } else {
        duplicates[node.data] = 1;
      }
      node = node.next;
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};

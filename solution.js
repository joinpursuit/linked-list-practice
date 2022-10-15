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

  insert(data) {
    let newInsertNode = new Node(data);
    if (!this.head) {
      this.head = newInsertNode;
    } else {
      newInsertNode.next = this.head;
      this.head = newInsertNode;
    }
  }

  //searches by key and returns node obj that contains the data.
  search(key) {
    let tempNode = this.head;
    while (tempNode) {
      if (tempNode.data === key) {
        return tempNode;
      }
      tempNode = tempNode.next;
    }
  }
  size() {
    let count = 0;
    let tempNode = this.head;
    while (tempNode) {
      tempNode = tempNode.next;
      count++;
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

  getKth(kth) {
    let node = this.head;
    let count = 1;
    while (count !== kth) {
      count++;
      node = node.next;
    }
    console.log(node);
    return node;
  }

  getKthToLast(kth) {
    let index = this.size(this) - kth;
    return this.getKth(index);
  }

  isEmpty() {
    return !this.head;
  }
  clear() {
    this.head = null;
  }
  toArray() {
    let array = [];
    let node = this.head;
    while (node) {
      array.push(node.data);
      node = node.next;
    }
    return array;
  }
  containsDuplicates() {
    let array = [];
    let node = this.head;
    while (node) {
      array.push(node.data);
      node = node.next;
    }
    const arr = [...new Set(array)];
    return array.length !== arr.length;
  }
}

module.exports = {
  Node,
  LinkedList,
};

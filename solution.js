const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
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

  delete(val) {
    let node = this.head;
    let count = 0;
    while (node.data !== val && node.next) {
      count++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < count; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }

  getFirst() {
    let node = this.head;
    return node;
  }

  getLast() {
    let node = this.head;
    if (!node) return null;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  search(val) {
    let node = this.head;
    while (node !== null && node.data !== val) {
      node = node.next;
    }
    return node;
  }

  getKth(k) {
    let node = this.head;
    for (let i = 1; i < k; i++) {
      node = node.next;
    }
    return node;
  }
  
  getKthToLast(k) {
    let node = this.head;
    for (let i = 1; i < this.size() - k; i++) {
      node = node.next;
    }
    return node;
  }
  
  isEmpty() {
    return this.head ? false : true;
  }

  clear() {
    return (this.head = null);
  }

  toArray() {
    let arr = [];
    let node = this.head;
    for (let i = 0; i < this.size(); i++) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }

  containsDuplicates() {
    let obj = {};
    let node = this.head;

    while (node) {
      if (obj[node.data]) {
        obj[node.data] += 1;
        node = node.next;
      } else {
        obj[node.data] = 1;
        node = node.next;
      }
    }

    for (const key in obj) {
      if (obj[key] > 1) {
        return true;
      }
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};

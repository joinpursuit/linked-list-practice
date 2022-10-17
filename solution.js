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
    const newNode = new Node(data);
    if (this.head) newNode.next = this.head;
    this.head = newNode;
  }
  size() {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  delete(value) {
    let node = this.head;
    let count = 0;
    while (node.data !== value && node.next) {
      count++;
      node = node.next;
    }
    const foundNode = node;
    node = this.head;
    for (let i = 1; i < count; i++) node = node.next;
    node.next = foundNode.next;
  }
  getFirst() {
    const node = this.head;
    while (node) return node;
  }
  getLast() {
    let node = this.head;
    while (node.next) node = node.next;
    return node;
  }
  search(value) {
    let node = this.head;
    while (node.data !== value && node !== null) node = node.next;
    return node;
  }
  clear() {
    this.head = null;
  }
  toArray() {
    const arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }
  isEmpty() {
    return !this.head;
  }
  containsDuplicates() {
    let node = this.head;
    const obj = {};
    while (node !== null) {
      if (obj[node.data]) obj[node.data]++;
      else obj[node.data] = 1;
      node = node.next;
    }
    for (const key in obj) if (obj[key] > 1) return true;
    return false;
  }
  getKth(k) {
    let node = this.head;
    for (let i = 1; i < k; i++) node = node.next;
    return node;
  }
  getKthToLast(k) {
    let node = this.head;
    for (let i = 1; i < this.size() - k; i++) node = node.next;
    return node;
  }
}

module.exports = {
  Node,
  LinkedList,
};

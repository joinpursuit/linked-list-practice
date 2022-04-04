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
    //create node
    let node = new Node(data);
    //if empty list
    if (!this.head) this.head = node;
    //if not empty
    else {
      node.next = this.head;
      this.head = node;
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
    //if the element is the first
    let prev = this.head;
    let curr = prev.next;
    if (prev.data === val) this.head = curr;
    else {
      while (curr) {
        if (curr.data === val) {
          prev.next = curr.next;
          break;
        } else {
          let temp = curr.next;
          prev = curr;
          curr = temp;
        }
      }
    }
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
  }
  search(val) {
    let node = this.head;
    while (node) {
      if (node.data === val) return node;
      node = node.next;
    }
  }
  getKth(index) {
    let node = this.head;
    if (index === 1) return node;
    let count = 1;

    while (count <= index) {
      count++;
      node = node.next;
    }
    return node;
  }
  getKthToLast(index) {
    let node = this.head;
    let count = 1;
    index = this.size() - 1 - index;
    while (count <= index) {
      count++;
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
    let node = this.head;
    let newArr = [];
    while (node) {
      newArr.push(node.data);
      node = node.next;
    }

    return newArr;
  }
  containsDuplicates() {
    let newArr = this.toArray();
    return [...new Set(newArr)].length !== newArr.length;
  }
}
console.log([] === []);
module.exports = {
  Node,
  LinkedList,
};

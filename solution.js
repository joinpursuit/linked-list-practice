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

}

module.exports = {
  Node,
  LinkedList,
};

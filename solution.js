const { nums, words } = require('./data/data.js');

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
    let newInsertNode = new Node(data);
    if (!this.head) {
      this.head = newInsertNode;
    } else {
      newInsertNode.next = this.head;
      this.head = newInsertNode;
    }
  }

  size() {
    let numSize = 0;
    let tempNode = this.head;
    while (tempNode) {
      tempNode = tempNode.next;
      numSize++;
    }
    return numSize;
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
  //getlast -as long as there is a next node, node becomes the next one. return the final one. null if no head
  getLast() {
    if (!this.head) return null;
    let node = this.head;
    while (node.next) {
      node = node.next;
    }
    return node;
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

  
}
module.exports = {
  Node,
  LinkedList,
};

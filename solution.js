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

  // INSERT INTO LINK LIST
  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  // SIZE
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  // DELETE
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

  // GET FIRST ELEMENT
  getFirst() {
    return this.head;
  }

  // GET LAST ELEMENT
  getLast() {
    let node = this.head;
    if(!this.head) return null;
    while(node.next) {
      node = node.next
    }
    return node;
  }

  // SEARCH 
  search(findItem) {
    let node = this.head;
    while(node !== null && node.data !== findItem) {
      node = node.next;
    }
    return node;
  }
}

module.exports = {
  Node,
  LinkedList,
};

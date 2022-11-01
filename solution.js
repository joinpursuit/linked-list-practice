const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    (this.data = data), (this.next = next);
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
    let counter = 0;
    let pointer = this.head;
    while (pointer) {
      counter++;
      pointer = pointer.next;
    }
    return counter;
  }
  delete(key) {
    let pointer = this.head;
    let counter = 0;
    while (pointer.data !== key && pointer.next) {
      counter++;
      pointer = pointer.next;
    }
    let foundPointer = pointer;
    pointer = this.head;
    for (let i = 1; i < counter; i++) {
      pointer = pointer.next;
    }
    pointer.next = foundPointer.next;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let pointer = this.head;
    if (!this.head) return null;
    while (pointer.next) {
      pointer = pointer.next;
    }
    return pointer;
  }
  search(findMe) {
    let pointer = this.head;
    while (pointer !== null && pointer.data !== findMe) {
      pointer = pointer.next;
    }
    return pointer;
  }
  getKth(element) {
    let pointer = this.head;
    let counter = 1;
    while (counter !== element && pointer.next) {
      counter++;
      pointer = pointer.next;
    }
    return pointer;
  }
  getKthToLast(element) {
    let pointer = this.head;
    let numNodes = 0;
    while (pointer) {
      numNodes++;
      pointer = pointer.next;
    }
    let counter = 1;
    pointer = this.head;
    while (counter < numNodes - element) {
      counter++;
      pointer = pointer.next;
    }
    return pointer;
  }
  isEmpty() {
    return !this.head;
  }
  clear() {
    this.head = null;
  }
  toArray() {
    let pointer = this.head;
    let array = [];
    while (pointer) {
      array.push(pointer.data);
      pointer = pointer.next;
    }
    return array;
  }
  containsDuplicates() {
    let pointer = this.head;
    let hash = {};
    while (pointer) {
      if (hash[pointer.data]) {
        return true;
      } else {
        hash[pointer.data] = 1;
      }
      pointer = pointer.next;
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};

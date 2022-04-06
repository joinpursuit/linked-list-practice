const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next ? next : null;
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
    let counter = 0;

    let currentNode = this.head;
    while (currentNode != null) {
      counter++;
      currentNode = currentNode.next;
    }

    return counter;
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
    while (node.next !== null) {
      node = node.next;
    }

    return node;
  }

  search(data) {
    let node = this.head;
    while (node.data !== data) {
      node = node.next;
    }

    return node;
  }

  getKth(data) {
    let node = this.head;
    let counter = 1;
    while (counter < data) {
      node.next = node;
      counter++;
    }

    return node;
  }

  getKthToLast(data) {
    let position = this.size() - data;
    let node = this.head;
    let counter = 1;
    while (counter < position) {
      counter++;
      node = node.next;
    }

    return node;
  }

  isEmpty() {
    if (this.head === undefined) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    return (this.head = null);
  }

  toArray() {
    let node = this.head;
    let array = [];
    while (node.next !== null) {
      array.push(node.data);
      node = node.next;
    }
    array.push(node.data);
    return array;
  }

  containsDuplicates() {
    let linkedListArrayed = this.toArray();
    let removeDuplicates = [...new Set(linkedListArrayed)];
    if (linkedListArrayed.length === removeDuplicates.length) {
      return false;
    } else {
      return true;
    }
  }
}

module.exports = {
  Node,
  LinkedList,
};

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

  insert(value) {
    let insertValue = new Node(value);
    if (this.head !== null) {
      insertValue.next = this.head;
    }
    this.head = insertValue;
  }

  size() {
    let sizeCount = 0;
    let currentNode = this.head;

    while (currentNode) {
      sizeCount++;
      currentNode = currentNode.next;
    }

    return sizeCount;
  }

  delete(index) {
    let currentNode = this.head;
    let previousNode = null;
    let indexCount = 0;

    if (index === 0) {
      currentNode = currentNode.next;
    } else {
      while (indexCount < index) {
        indexCount++;
        previousNode = currentNode;
        currentNode = currentNode.next;
      }
      previousNode.next = currentNode.next;
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let currentNode = this.head;
    while (currentNode !== null) {
      if (currentNode.next !== undefined) {
        currentNode = currentNode.next;
      } else {
        return currentNode;
      }
    }

    return currentNode;
  }

  search(value) {
    let currentNode = this.head;
    let currentCount = 0;

    while (currentCount <= this.size()) {
      currentCount++;

      if (value === currentNode.data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  getKth(value) {
    let currentNode = this.head;
    let currentCount = 1;

    while (currentCount < value) {
      currentCount++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  getKthToLast(value) {
    let currentNode = this.head;
    let currentSize = this.size() - value;
    let currentCount = 0;

    while (currentNode) {
      if (currentCount === currentSize) {
        return currentNode;
      }
      currentCount++;
      currentNode = currentNode.next;
    }
  }

  isEmpty() {
    return !this.size();
  }

  clear() {
    return (this.head = null);
  }

  toArray() {
    const nodeArr = [];
    let currentNode = this.head;

    while (currentNode) {
      nodeArr.push(currentNode.data);
      currentNode = currentNode.next;
    }

    return nodeArr;
  }

  containsDuplicates() {
    let currentNode = this.head;
    const duplicates = {};

    while (currentNode) {
      if (duplicates[currentNode.data]) {
        return true;
      } else {
        duplicates[currentNode.data] = 1;
      }
      currentNode = currentNode.next;
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};

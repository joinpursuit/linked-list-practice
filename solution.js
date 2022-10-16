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

  delete(key) {
    let tempNode = this.head;
    let prevNode = null;

    if (tempNode !== null && tempNode.data === key) {
      this.head = tempNode.next;
      return;
    }

    while (tempNode !== null && tempNode.data !== key) {
      prevNode = tempNode;
      tempNode = tempNode.next;
    }

    if (tempNode === null) {
      return;
    }

    prevNode.next = tempNode.next;
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
    let currentLength = this.size();
    let currentNode = this.head;
    let currentCount = 1;

    while (currentCount !== currentLength - value) {
      currentCount++;
      currentNode = currentNode.next;
    }

    return currentNode;
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

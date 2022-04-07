const { nums, words } = require("./data/data.js");

//Create a class Node{}
class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

//Create a class LinkedList{}
class LinkedList {
  constructor(head = null) {
    this.head = head;
    // this.tail = null;
  }

  //Create an insert method()
  insert(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  //Create a size method()
  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  //Create a delete method
  delete(value) {
    let count = 0;
    let currentNode = this.head;

    while (currentNode.data != value && currentNode.next) {
      count++;
      currentNode = currentNode.next;
    }

    let current = currentNode;
    currentNode = this.head;

    for (let i = 1; i < count; i++) {
      currentNode = currentNode.next;
    }

    currentNode.next = current.next;
  }

  //Create a getFirst method()
  getFirst() {
    return this.head;
  }

  //Create a getLast method
  getLast() {
    let currentNode = this.head;
    if (!currentNode) {
      return null;
    }

    while (currentNode.next) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  //create a search method
  search(value) {
    let currentNode = this.head;
    while (currentNode != null && currentNode.data != value) {
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  //create a getKth method
  getKth(value) {
    let count = 0;
    let currentNode = this.head;

    while (currentNode != null) {
      if ((count = value)) {
        return currentNode;
      }
      count++;
      currentNode = currentNode.next;
    }
    return null;
  }

  //Create a getKthToLast method()
  getKthToLast(value) {
    let currentNode = this.head;
    let count = 0;
    while (currentNode !== null) {
      currentNode = currentNode.next;
      count++;
    }
    count < value;
    currentNode = this.head;

    for (let i = 1; i < this.size() - value; i++) {
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  //Create a isEmpty method()
  isEmpty() {
    if (this.size == 0 || this.head == null) {
      return true;
    } else {
      return false;
    }
  }

  //Create a clear method()
  clear() {
    this.head = null;
  }

  //Create a toArray method()
  toArray() {
    let arr = [];
    let currentNode = this.head;
    for (let i = 0; i < this.size(); i++) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return arr;
  }

  //Create a containsDuplicate method()
  containsDuplicates() {
    let currentNode = this.head;
    let obj = {};

    while (currentNode) {
      if (obj[currentNode.data]) {
        obj[currentNode.data] += 1;
        currentNode = currentNode.next;
      } else {
        obj[currentNode.data] = 1;
        currentNode = currentNode.next;
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

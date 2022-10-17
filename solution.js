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
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
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

  getFirst(data) {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!this.head) return null;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  getKth(position) {
    let node = this.head;
    let count = 1;

    while (count < position) {
      count++;
      node = node.next;
    }
    return node;
  }

  getKthToLast(position) {
    let countBackwards = this.size() - position;

    let node = this.head;
    let count = 1;
    while (node) {
      if (count === countBackwards) {
        return node;
      }
      count++;
      node = node.next;
    }
  }

  isEmpty() {
    return this.head === null;
  }

  toArray(data) {
    let node = this.head;
    let listArr = [];

    while (node !== null) {
      listArr.push(node.data);
      node = node.next;
    }

    return listArr;
  }

  containsDuplicates(data) {
    let node = this.head;
    const obj = {};

    while (node) {
      if (obj[node.data]) {
        return true;
      } else {
        obj[node.data] = 1;
      }
      node = node.next;
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};

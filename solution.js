const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data, next) {
    const node = new Node(data, next);
    node.next = this.head;
    this.head = node;
  }

  size() {
    let node = this.head;
    if (this.head == null) return 0;
    let count = 1;
    while (node.next != null) {
      count++;
      node = node.next;
    }
    return count;
  }

  delete(key) {
    let currentNode = this.head;
    let prevNode = this.head;
    while (currentNode.next != null) {
      if (currentNode.data == key) {
        const nextNode = currentNode.next;
        prevNode.next = nextNode;
        break;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node.next != null) {
      node = node.next;
    }
    return node;
  }

  search(key) {
    let node = this.head;
    while (node.next != null) {
      if (node.data === key) {
        return node;
      }
      node = node.next;
    }
  }

  getKth(k) {
    let count = 1;
    let node = this.head;
    while (node.next != null) {
      if (count === k) {
        return node;
      }
      count++;
      node = node.next;
    }
  }

  getKthToLast(k) {
    let size = this.size();
    // size 10, k = 3, size - count  + 1  == k
    let count = 1;
    let node = this.head;
    while (node.next != null) {
      if (size - k + 1 == k) {
        return node;
      }
      node = node.next;
    }
  }

  isEmpty() {
    return this.head == null;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let arr = [];
    let node = this.head;
    while (node.next != null) {
      arr.push(node.data);
      node = node.next;
    }
    if (node.next === null) arr.push(node.data);
    return arr;
  }

  containsDuplicates() {
    let arr = [];
    let node = this.head;
    while (node.next != null) {
      if (!arr.includes(node.data)) {
        arr.push(node.data);
        node = node.next;
      } else {
        return true;
      }
    }

    return arr.includes(node.data);
  }
}

module.exports = {
  Node,
  LinkedList,
};

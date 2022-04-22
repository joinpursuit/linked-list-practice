const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next ? next : null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
    this.length = 0;
  }

  insert(num) {
    let newNode = new Node(num);
    if (this.head !== null) {
      newNode.next = this.head;
    }
    this.head = newNode;
  }

  size() {
    let counter = 0;
    let newNode = this.head;
    while (newNode) {
      counter++;
      newNode = newNode.next;
    }
    return counter;
  }

  delete(index) {
    let current = this.head;
    let previous = null;
    let count = 0;

    if (index === 0) {
      current = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
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

  search(num) {
    let current = this.head;
    let count = 0;
    while (count <= this.size()) {
      count++;
      if (num === current.data) {
        return current;
      }
      current = current.next;
    }
  }

  getKth(num) {
    let current = this.head;
    let count = 1;
    while (count < num) {
      count++;
      current = current.next;
    }
    return current;
  }

  getKthToLast(value) {
    let node = this.head;
    let size = this.size();

    if (value === 0) {
      return node;
    }

    let i = size;

    while (node) {
      if (node.next == null) {
        if (value === size - 1) {
          return node;
        }
      } else {
        if (size - value === i) {
          return node;
        }
      }
      i--;
      node = node.next;
    }
  }

  isEmpty() {
    return !this.size();
  }

  clear() {
    return (this.head = null);
  }

  getKthToLast(k) {
    // k = 1, length = 11, nodeNum = 10
    // k = 5, length = 11, nodeNum = 6
    // k = 8, length = 11, noduNum = 3

    let nodeNum = this.size() - k;
    let count = 1;
    let node = this.head;

    while (node) {
      if (count === nodeNum) {
        return node;
      }
      count++;
      node = node.next;
    }
  }

  toArray() {
    const array = [];
    let current = this.head;
    let count = 0;
    while (count < this.size()) {
      count++;
      array.push(current.data);
      current = current.next;
    }
    console.log(array);
    return array;
  }

  containsDuplicates() {
    let current = this.head;
    const dupes = {};
    while (current) {
      if (dupes[current.data]) {
        return true;
      } else {
        dupes[current.data] = 1;
      }
      current = current.next;
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};

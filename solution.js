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
  getKth(kth) {
    let node = this.head;
    let count = 1;
    while (count !== kth) {
      count++;
      node = node.next;
    }
    console.log(node);
    return node;
  }

  getKthToLast(kth) {
    let index = this.size(this) - kth;
    return this.getKth(index);
  }

  isEmpty() {
    return !this.head;
  }
  clear() {
    this.head = null;
  }
  toArray() {
    let arr = [];
    let tempNode = this.head;
    while (tempNode) {
      arr.push(tempNode.data);
      tempNode = tempNode.next;
    }
    return arr;
  }
  containsDuplicates() {
    let obj = {};
    let tempNode = this.head;
    while (tempNode) {
      if (obj[tempNode.data]) {
        obj[tempNode.data] += 1;
      } else {
        obj[tempNode.data] = 1;
      }
      tempNode = tempNode.next;
    }
//now check if any keys' value = more than 1 which means there are duplicates
    for (let key in obj) {
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

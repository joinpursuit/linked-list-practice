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
    let newNode = this.head;
    while (newNode) {
      count++;
      newNode = newNode.next;
    }
    return count;
  }

  delete(data) {
    let current = this.head;
    let last = null;
    let count = 0;

    if (data === 0) {
      current = current.next;
    } else {
      while (count < data) {
        count++;
        last = current;
        current = current.next;
      }

      last.next = current.next;
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!this.head) return null;
    while (node.next !== null) {
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

  getKth(num) {
    let current = this.head;
    let count = 1;
    while (count < num) {
      count++;
      current = current.next;
    }
    return current;
  }

  getKthToLast(index) {
    let node = this.head;
    let length = this.size();
    let count = 1;

    while(count !== (length - index)){
      count ++
      node = node.next
    }
    return node
  }

  isEmpty() {
    return !this.head;
  }

  clear() {
   this.head = null;
  }
  toArray() {
    // const arr = [];
    // let node = this.head;
    // let count = 0;
    // while (count < this.size()) {
    //   count++;
    //   arr.push(node.data);
    //   node = node.next;
    // }
    // return arr;
    let arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
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

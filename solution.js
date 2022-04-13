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
  insert(value) {
    let newNode = new Node(value);
    if (!this.head) {
      // if there is no head
      // the new node is the head
      this.head = newNode;
    } else {
      // pointing newnode's next to this.head
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  // insert(value) {
  //   let newNode = new Node(value);
  //   if (!this.head) {
  //     newNode.next = this.head;
  //     this.head = newNode;
  //   }
  //     this.head = newNode;
  // }
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  delete() {
    if (this.head === null)
      throw new Error("Error: The current linked list is empty");

    let temp = this.head;
    this.head = this.head.next;
    return temp.data;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let node = this.head;
    while (node) {
      if (!node.next) {
        return node;
      }
      node = node.next;
    }
  }
  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }
  getKth(k) {
    let node = this.head;
    let count = 1;
    while (node) {
      if (k === count) return node;
      count++;
      node = node.next;
    }
  }
  getKthToLast(k) {
    // (length - 1) - k
    let nodeNum = this.size() - k;

    let temp = this.head;
    let count = 1;
    while (temp) {
      if (count === nodeNum) {
        return temp;
      }
      count++;
      temp = temp.next;
    }
  }
  isEmpty() {
    return this.head === null;
  }
  clear() {
    this.head = null;
  }
  toArray() {
    let array = [];
    let node = this.head;
    while (node) {
      array.push(node.data);
      node = node.next;
    }
    return array;
  }
  containsDuplicates() {
    let obj = {};
    let node = this.head;
    while (node) {
      if (!obj[node.data]) {
        obj[node.data] += 1;
        node = node.next;
      } else {
        obj[node.data] = 1;
      }
      for (let count in obj) {
        if (obj[count] > 1) {
          return true;
        }
      }
    }
    return false;
  }
}

// let list = new LinkedList();
// list.insert()
// list.insert()
// list.insert()
// console.log(list)

module.exports = {
  Node,
  LinkedList,
};

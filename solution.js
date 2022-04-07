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

  insert(data) {
    // console.log(data, this.head)
    this.head = new Node(data, this.head);
    // console.log(this.head)
  }

  // insert(value) {
  //   let newNode = new Node(value);
  //   let node = this.head;

  //   if (node.val > value) {
  //     newNode.next = node;
  //     this.head = newNode;
  //   }

  // while (node) {
  //   if (node.next.val > value || node.next === null) {
  //     let temp = node.next;
  //     node.next = newNode;
  //     newNode.next = temp;
  //   };

  //   node = node.next;
  // }

  //   return this.head;
  // };

  size() {
    let counter = 0;

    let currentNode = this.head;
    while (currentNode != null) {
      console.log(currentNode, counter);
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }

  delete() {
    this.head = null;
  }

  getFirst() {
    return this.head;
  }

  getLast() {}

  search(data) {
    let currentNode = this.head;
    while (currentNode != null) {
      if (currentNode.val === data) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  // search() {}

  ketKth() {}

  getKthToLast() {}

  isEmpty() {
    if (!this.head) {
      return true;
    }
    return false;
  }

  clear() {
    this.head = null;
  }

  toArray() {}
}

module.exports = {
  Node,
  LinkedList,
};

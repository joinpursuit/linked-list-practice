const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(value) {
    let nextNode = new Node(value);
    if (!this.head) {
      this.head = nextNode;
    } else {
      nextNode.next = this.head;
      this.head = nextNode;
    }
  }
}

module.exports = {
  Node,
  LinkedList,
};

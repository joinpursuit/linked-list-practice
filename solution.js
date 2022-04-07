const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next ? next : null;
  }
}

class LinkedList {
  constructor(head) {
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
  delete(data) {}
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
  isEmpty() {
    if (this.head === undefined) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    return (this.head = null);
  }
}
//const node1 = new Node(1);
//const node2 = new Node(2);
//node1.next = node2;
//const LL = new LinkedList(node1);
//LL;

//const node1 = new Node(1);
//const node2 = new Node(2);
//node1.next = node2;
//node1

module.exports = {
  Node,
  LinkedList,
};

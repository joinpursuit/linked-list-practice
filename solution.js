const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data ? data : null;
    this.next = next ? next : null;
  }
}

class LinkedList {
  constructor(head, tail) {
    this.head = head;
    this.tail = tail;
  }
  insert(data) {
    let newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let counter = 0;
    let curr = this.head;

    while (curr) {
      counter++;

      curr = curr.next;
    }
    return counter;
  }
}

// let node = new Node(1);
// let list = new LinkedList(node);
// list.count();

// console.log(node);
// console.log(list);
// console.log(list.count());

module.exports = {
  Node,
  LinkedList,
};

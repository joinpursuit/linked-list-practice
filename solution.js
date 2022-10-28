const { nums, words } = require("./data/data.js");

// Tests:
// Can create a new node [ok]
class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

// Can create a new linked list [ok]
class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  // Add to the linked list using an insert method
  insert(data) {
    // Creating a new node
    // Validating if it's the head, then assign the head, otherwise assing the next
    let newNode = new Node(data);
    if (this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  

 
}

const firstNode = new Node(1);
const secondNode = new Node(2);
firstNode.next = secondNode;

console.log(firstNode);

const firstList = new LinkedList(firstNode);
console.log(firstList);



module.exports = {
  Node,
  LinkedList,
};
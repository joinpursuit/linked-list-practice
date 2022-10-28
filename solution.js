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

  // Add to the linked list using an insert method [ok]
  insert(data) {
    // Creating a new nodes
    let insertNode = new Node(data);
    
    // Validating if the head exist, then assign the next node
    if (this.head !== null) {
      insertNode.next = this.head;
    }
    this.head = insertNode;
  }

  // Count the length of the linked list [ok]
  size() {
    let count = 0;
    let node = this.head;
    // Validating While the node exist, then count them 
    while (node) {
      // Increment de count and pass to the next
      count++;
      node = node.next;
    }
    return count;
  }

  // Delete from the linked list by key [ok]
  delete(data) {
    
    let node = this.head;
    let counter = 0;
    //
    while (node.data !== data && node.next) {
      counter++;
      node = node.next;
    }
    //
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }

  // Retrieve the first element [ok]
  getFirst() {
    return this.head;
  }
 
}

// const firstNode = new Node(1);
// const secondNode = new Node(2);
// firstNode.next = secondNode;

// console.log(firstNode);

const firstList = new LinkedList(nums);
console.log(firstList);

firstList.size;
console.log(firstList.size);



module.exports = {
  Node,
  LinkedList,
};
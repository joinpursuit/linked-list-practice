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
    // Validating
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
    // Returning the head
    return this.head;
  }

  // Retrieve the last element [ok]
  getLast() {
    let node = this.head;
    if (!this.head) return null;
    // Keep iterating until the last node
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  // Find an element by key [ok]
  search(key) {
    let node = this.head;
    // 
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }

  // Retrieve kth element [ok]
  getKth(val) {
    //
    let currentNode = this.head;
    let currentCount = 1;
    // 
    while (currentCount < val) {
      currentCount++;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  // Retrieve kth element
  getKthToLast(val) {
    let currentLength = this.size();
    let currentNode = this.head;
    let currentCount = 1;

    while (currentCount !== currentLength - val) {
      currentCount++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  // Check if list is empty
  isEmpty() {
    return this.size() ? false : true;
  }

  // Clear the linked list
  clear() {
    this.head = null;
  }

  // Convert data from linked lists into an array
  toArray() {
    // Creating a new array
    const arr = [];
    let currentNode = this.head;
    // Iterate over the list, and push the nodes to the array
    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return arr;
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
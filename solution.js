const { nums, words } = require('./data/data.js');

//Create Node class with data and a pointer:
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

  //Add new node to the linked list
  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode; //=> newNode will be inserted at the head of the linked list
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  //Count the length of the linked list
  size() {
    let length = 0;
    let currentNode = this.head;
    while (currentNode) {
      length++;
      currentNode = currentNode.next;
    }
    return length;
  }

  //Delete a node with a specific key:
  delete(data) {
    let count = 0;
    let node = this.head;
    while (node.data !== data && node.next) {
      count++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < count; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }

  //Get the first node of the linked list
  getFirst() {
    return this.head;
  }

  //Get the last node of the linked list
  getLast() {
    let node = this.head;
    if (!this.head) return null;
    while (node.next) {
      node = node.next;
    }
    return node;
  }

  //Search an element by key:
  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }

  //Retrieve the kth element of the linked list
  getKth(k) {
    let count = 1;
    let currentNode = this.head;

    while (currentNode !== null && count < k) {
      currentNode = currentNode.next;
      count++;
    }
    return currentNode;
  }

  //Retrieve the kth element from lastt element of the linked list
  getKthToLast(k) {
    let indx = this.size() - k;
    return this.getKth(indx);
  }

  //check if the list is empty
  isEmpty() {
    return this.head === null;
  }

  //Clear all the nodes in the linked list
  clear() {
    this.head = null;
  }

  //Convert data from linked list into an array:
  toArray() {
    let arr = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return arr;
  }

  //Check for duplicates:
  containsDuplicates() {
    //Create an array:
    let arr = this.toArray();
    //Use new Set() which will create unique values of any data type (primitive or reference)
    let unique = new Set(arr);
    return unique.size !== arr.length ? true : false;
  }
}

//Do not change any code below this line
module.exports = {
  Node,
  LinkedList,
};

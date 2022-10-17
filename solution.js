const { nums, words } = require("./data/data.js");

// DATA is our information
// NEXT refers to the next item
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = null;
  }
}

// HEAD is the first item in the linked list
// Holds all of the methods to manipulate the linked list and has a HEAD property
// methods start by operating on the head -> most involve transversing the list
// this is accomplished by setting a variable = this.head
// iterating over the list while we have a next value and doing some sort of work

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

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
      // terminates with node.next - equals null
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!this.head) return null;
    while (node.next) {
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

  clear() {
    this.head = null;
  }

  isEmpty() {
    return !this.head;
  }

  delete(data) {
    let node = this.head;
    let counter = 0;
    // we need to track how many steps to take to delete after we found out node
    while (node.data !== data && node.next) {
      counter++;
      node = node.next;
    } // only breaks while loops if we have found our node
    let foundNode = node;
    node = this.head; // reset node and walk through everything
    for (let i = 1; i < counter; i++) {
      node = node.next;
    } // the for loop will only iterate until we reach out destination node
    // once we've found the destination node - we simply assign the current node next value to the node to delete the next value - essentially skipping it in the list
    node.next = foundNode.next;
  }

  getKth(kth) {
    let node = this.head;
    let count = 1;
    while (count !== kth) {
      count++;
      node = node.next;
    }
    return node;
  }

  getKthToLast(kth) {
    let index = this.size(this) - kth;
    return this.getKth(index);
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
    let array = [];
    let node = this.head;
    let length = this.size();

    for (let i = 0; i < length; i++) {
      if (array.includes(node.data)) {
        return true;
      } else {
        array.push(node.data);
        node = node.next;
      }
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};

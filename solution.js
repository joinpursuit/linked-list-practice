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
  insert(data) {//the data is the new instance of node
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head
      this.head = newNode;
    }
    return newNode
  }
  size() {
    let count = 0;
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count;
  }
  delete(data) {
    let node = this.head;
    let counter = 0;
    while (node.data !== data && node.next) {//moving through to the node that matches
      counter++;//increase
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    if (!this.head) return null;
    while (node.next) {//this iterates through all the nodes until it reaches the one with null then returns that node. It being the last node
      node = node.next;
    }
    return node;
  }
  search(thingamajig) {
    let node = this.head;
    while (node !== null && node.data !== thingamajig) {
      node = node.next
    }
    return node
  }
  clear() {
    this.head = null;
  }

}








module.exports = {
  Node,
  LinkedList,
};

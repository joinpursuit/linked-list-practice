const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList{
  constructor(head = null){
    this.head = head;
  }
  
  insert(data) {
    let newNode = new Node(data);
    // console.log('This is newNode', newNode)
    
    if (this.head === null) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
      // console.log('This is newNode.next', newNode.next)
    }
  }

  size() {
    let counter = 0;

    let currentNode = this.head;
    while (currentNode != null) {
      counter++;
      currentNode = currentNode.next;
    }

    return counter;
  }

  delete(data) {
    let node = this.head;
    let counter = 0;
    while (node.data !== data && node.next) {
      counter++;
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
    while (node.next !== null) {
      node = node.next;
    }

    return node;
  }

  search(data) {
    let node = this.head;
    while (node.data !== data) {
      node = node.next;
    }

    return node;
  }

  getKth(data) {
    let node = this.head;
    let counter = 1;
    while (counter < data) {
      node.next = node;
      counter++;
    }

    return node;
  }

  getKthToLast(data) {
    let position = this.size() - data;
    let node = this.head;
    let counter = 1;
    while (counter < position) {
      counter++;
      node = node.next;
    }

    return node;
  }

  isEmpty() {
    while(!this.head){
      return true
    } return false
  }

  clear() {
    this.head = null
  }

  toArray() {
    let node = this.head;
    console.log('node', node)
    let arr = [];
    while (node.data) {
      arr.push(node.data);
      node = node.next;
    }
    arr.push(node.data);
    console.log('arr', arr);//Not sure why 10 isnt being pushed
    return arr
  }

  // containsDuplicates() {}
}

module.exports = {
  Node,
  LinkedList,
};

const { nums, words } = require("./data/data.js");

class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}

class LinkedList{

  insert(value) {
    let nodeToInsert = new Node(value);

    if (!this.head) {
      this.head = nodeToInsert;
      return;
    }

    let tempNode = this.head;

    while (tempNode.next) {
      tempNode = tempNode.next;
    }

    tempNode.next = nodeToInsert;
  }

  size(){
    let tempNode = this.head;
    let count = 0

    while (tempNode) {
      tempNode = tempNode.next;
      count += 1
    }
    return count
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

  getFirst(){
    return this.head
  }

  getLast(){
    let tempNode = this.head;

    while (tempNode.next) {
      tempNode = tempNode.next;
    }
    return tempNode
  }

  search(data){
    let node = this.head;
    while (node.data !== data) {
      node = node.next;
    }
    return node
  }

  getKth(k) {
    let node = this.head;
    let count = 0;
    while (node) {
      count++;
      if (count === k) {
        return node;
      }
      node = node.next;
    }
  }

  getKthToLast(k) {
    let index = this.size() - k;
    return this.getKth(index);
  }

  isEmpty(){
    return this.size() === 0
  }

  clear(){
    this.head = null
  }

  toArray() {
    let node = this.head;
    let array = [];
    while (node) {
      array.push(node.data);
      node = node.next;
    }
    return array;
  }

  containsDuplicates() {
    const array = this.toArray();
    let set = new Set(array);
    if (set.size == array.length) {
      return false;
    }
    return true;
  }
}

module.exports = {
  Node,
  LinkedList,
};

const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(value){
    let newNode = new Node(value);
    newNode.next = this.head; 
    this.head = newNode;
  }

  size () {
    let count = 0;
    let node = this.head;

    while(node) {
      count++;
      node = node.next;
    }
    return count;
  }

  delete(k) {
    if(this.head.data === key) {
      this.head = this.head.next;
    }
    let node = this.head;
    while(node.next) {
      if(node.next.data === key) {
        node.next = node.next.next;
      }
    node = node.next;
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while(node.next) {
      node = node.next;
    }
    return node;
  }

  search(value) {
    let node = this.head;
    while(node.data !== value) {
      node = node.next;
    }
    return node;
  }

  getKth(index) {
    let node = this.head;
    let count = 1;
    
    while(count !== index){
      count++;
      node = node.next;
    }

    return node;
  }

  getKthToLast(k) {
    let node = this.head;
    let count = 1;
    
    while(count !== this.size() - k){
      count++;
      node = node.next;
    }

    return node;
  }

  isEmpty() {
    return this.head === null;
  }

  clear() {
    this.head = null;
  }

  
  toArray(){
    let arr = [];
    let node = this.head;

    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }

  containsDuplicate() {
    let arr = [];
    let node = this.head;
    while(node) {
      if(arr.includes(node.data)) {
        return true;
      }
      arr.push(node.data);
      node = node.next;
    }
    return false;
  }
  
}


module.exports = {
  Node,
  LinkedList,
};

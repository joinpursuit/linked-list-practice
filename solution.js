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

  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }


  delete(data) {
    let node = this.head;
    let count = 0;
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

  size() {
    let node = this.head;
    let count = 0;

    while (node) {
      count++;
      node = node.next;
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

  search(data) {
    let node = this.head;
    while (node.data !== data && node !== null) {
      node = node.next;
    }
    return node;
  }

  getK(k) {
    let node = this.head;
    for (let i = k - 1; i > 0; i--) {
      node = node.next;
    }
    return node;
  }

  getKToLast(k) {
    //  console.log(k)
     let node = this.head;
     let index = this.size() - k;
     for(let i = index - 1; i > 0; i--){
       node = node.next;
     }
    //  console.log(node)
     return node;
  }

  isEmpty() {
    return this.head === null;
  }


  toArray() {
    let listArray = [];
    let node = this.head;
    while (node) {
      listArray.push(node.data);
      node = node.next;
    }
    return listArray;
  }

  clear() {
    this.head = null;
  } 

  containsDuplicates() {
    let count = 0;
    while(this.head.next !== null){
      let node = this.head.next;
      while(node !== null){
        if(this.head.data == node.data){
          count++;
          break;
        }
        node = node.next
      }
      this.head = this.head.next
    }
    return count === 0 ? false : true;
  }
}

module.exports = {
  Node,
  LinkedList,
};

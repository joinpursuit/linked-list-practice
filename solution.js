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
    if(this.head) newNode.next = this.head;
    this.head = newNode;

    // if(!this.head) this.head = newNode;
    // else {
    //   newNode.next = this.head;
    //   this.head = newNode;
    // }
  }
  size() {
    let count = 0;
    let node = this.head;
    while(node) {
      count++;
      node = node.next;
    }
    return count;
  }
  delete(key) {
    let node = this.head;
    let counter = 0;
    while(node.data !== key && node.next) {
      counter++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for(let i = 1; i < counter; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    if(!this.head) return null;
    while(node.next) {
      node = node.next;
    }
    return node;
  }
  search(key) {
    let node = this.head;
    while(node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }
  getKth(k){
    let node = this.head;
    let count = 0;
    while(node <= k) {
      count++;
      node = node.next;
    }
    return node;
  }
  getKthToLast(k) {
    let nodeNum = this.size() - k;
    let temp = this.head;
    let count = 1;
    while(temp) {
      if (count === nodeNum) return temp;
      count++;
      temp = temp.next;
    }
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear() {
    return this.head = null;
  }
  toArray() {
    let node = this.head;
    let arr = [];
    while(node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }
  containsDuplicates() {
    let temp = this.head;
    let aSet = new Set();
    while(temp) {
      let tempData = temp.data;
      if(aSet.has(tempData)) return true;
      else aSet.add(tempData);
      temp = temp.next;
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};

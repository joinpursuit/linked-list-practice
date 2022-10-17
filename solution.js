const e = require("express");
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

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
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

  getLast() {
    let node = this.head;
    if (!this.head) return null;
    while (node.next) {
      node = node.next;
    }
    return node;
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

  getKth(k) {
    let node = this.head;
    let i = 1;
    while (node !== null && i < k) {
      node = node.next;
      i++
    }
    return node;
  }

  getKthToLast(count) {
    let node = this.head;
    if (!this.head) return null;
    let currentNode
    while (node.next) {
      currentNode = node
      node = node.next;
      node.previous = currentNode
    }
    
    while(count){
      node = node.previous;
      count--
    }
    return node
  }

  isEmpty() {
    return this.head ? false : true;
  }

  toArray() {
    let arr = []
    let node = this.head
    while(node != null){
      arr.push(node.data)
      node = node.next
    }
    return arr
  }

  containsDuplicates() {
    let obj = {}
    let node = this.head
    while(node != null){
      if(!obj[node.data]){
        obj[node.data] = 1
        node = node.next
      } else {
        return true
      }
    }
    return false
  }
}

module.exports = {
  Node,
  LinkedList,
};

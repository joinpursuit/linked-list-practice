const { nums, words } = require("./data/data.js");

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null){
    this.head = head;
  }
  insert(data){
    let newNode = new Node(data);
    
    if(this.head){
      newNode.next = this.head;
    }
    this.head = newNode;
  }
  size(){
    let count = 0;
    let current = this.head;
    while(current){
      count++;
      current = current.next;
    }
    return count;
  }
  delete(key) {
    let current = this.head;
    let prev = null;
    while(current){
      if(current.data === key) {
        if(prev === null) {
          this.head = current.next;
        } else {
          prev.next = current.next;
        }
        return current.data;
      }
      prev = current;
      current = current.next;
    }
    return current.data;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let current = this.head;
    while(current.next){
      current = current.next;
    }
    return current;
  }
  search(key) {
    let current = this.head;
    while(current.data !== key){
      current = current.next;
    }
    return current;
  }
  getKth(position) {
    let current = this.head;
    let count = 1;
    while(current){
      if(position === count){
        return current;
      }
      count++;
      current = current.next;
    }
  }
  getKthToLast(position) {
    let nodeNum = this.size() - position;
    let current = this.head;
    let count = 1;
    while(current){
      if(nodeNum === count){
        return current;
      }
      count++;
      current = current.next;
    }
}
  isEmpty() {
    return this.head === null;
  }
  clear() {
    return this.head = null;
  }
  toArray() {
    let arr = [];
    let current = this.head;
    while(current){
      arr.push(current.data);
      current = current.next;
    }
    return arr;
  }
  containsDuplicates() {
    let count = {};
    let current = this.head;
    while(current){
      if(!count[current.data]){
        count[current.data] = 1;
      } else {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}


module.exports = { Node, LinkedList };
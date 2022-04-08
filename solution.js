const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  insert(value) {
    this.head = new Node(value, this.head);
  }
  size() {
    let count = 0;
    let temp = this.head;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  delete(key) {
    let temp = this.head;
    let prev = null;
    while (temp) {
      if (temp.data === key) {
        if (prev === null) {
          this.head = temp.next;
        } else {
          prev.next = temp.next;
        }
        return temp.data;
      }
      prev = temp;
      temp = temp.next;
    }
    return temp.data;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    while (temp) {
      if (temp.next === null) {
        return temp;
      }
      temp = temp.next;
      if (temp.next === null) {
        return temp;
      }
    }
  }
  search(key) {
    if (!this.head) return null;
    let temp = this.head;
    let searchedFor = null;
    while (temp) {
      if (temp.data === key) {
        searchedFor = temp;
      }
      temp = temp.next;
    }
    return searchedFor;
  }
  getKth(num) {
    let temp = this.head;
    let count = 0;
    let kthNode = null;
    while (temp) {
      count++;
      if (count === num) {
        kthNode = temp;
      }
      temp = temp.next;
    }
    return kthNode;
  }
  getKthToLast(num) {
    let kthToLastNum = this.size() - num;
    let kthToLastNode = null;
    let count = 0;
    let temp = this.head;
    while (temp) {
      count++;
      if (kthToLastNum === count) {
        kthToLastNode = temp;
      }
      temp = temp.next;
    }
    return kthToLastNode;
  }
  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }
  clear() {
    this.head.next = null;
    this.head = null;
  }
  toArray() {
    let array = [];
    let temp = this.head;
    while(temp){
      array.push(temp.data);
      temp = temp.next;
    }
    return array;
  }
  containsDuplicates() {
    let temp = this.head;
    let object = {};
    while(temp){
      object[temp.data] = (object[temp.data] || 0) + 1;
      temp = temp.next;
    }
    for(let key in object){
      if(object[key] > 1){ 
        return true;
      }
    }
    return false;
  }
}


module.exports = {
  Node,
  LinkedList,
};
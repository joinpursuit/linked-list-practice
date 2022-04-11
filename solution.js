const { nums, words } = require("./data/data.js");

class Node {
  constructor (data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList{
  constructor (head = null) {
    this.head = head;
  }
  insert(data){
    let newNode = new Node(data);
    if (this.head !== null) {
    newNode.next = this.head;
    }
    this.head = newNode;
  }
  size(){
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  delete(data) {
    let node = this.head;
    let counter = 0 ;
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
    let node = this.head;
    return this.head;
}
  getLast() {
    let node = this.head;
    while(node) {
      node = node.next;
      if (node.next === null) {
        return node;
      }
    }
  }
  search(data) {
     let node = this.head;
     while (node.data !== data && node.next) {
       node = node.next;
     }
     return node;
  }
  getKth(k) {
    let node = this.head;
    let count = 1;
    while(node) {
      if (count === k){
        return node;
    }
      count++;
      node= node.next;
    }
  }
  getKthToLast(k){
    let nodeNum = this.size() - k;
    let temp = this.head;
    let count = 1;
    while(temp) {
      if (count === nodeNum) {
          return temp;
      }
      count++;
      temp = temp.next;
    }
  }
  isEmpty() {
    return this.size() === 0;
  }
  clear(){
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
  containsDuplicates(){
       let node = this.head;
      }

module.exports = {
  Node,
  LinkedList,
};

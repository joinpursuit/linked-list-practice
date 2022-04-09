const { nums, words } = require("./data/data.js");

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(head=null){
    this.head = head;
  }
  insert(value){
    let newNode = new Node(value);
    newNode.next = this.head
    this.head = newNode
  }
  size(){
    let count = 0;
    let node = this.head;
    while(node){
      count++
      node = node.next;
    }
    return count
  }
  delete(data){


  }
  getFirst(){
    return this.head;
  }
  getLast(){
    let node = this.head;
    if(!this.head) return null;
    while(node.next){
      node = node.next;
    }
    return node;
  }
  search(key){
    let node = this.head;
    while(node !== null && node.data !== key){
      node = node.next;
    }
    return node;
  }
  getKth(){}
  getKthToLast(){}
  isEmpty(){
    return this.head === null;
  }
  clear(){
    this.head = null;
  }
  toArray(){}
  containsDuplicates(){}
}









module.exports = {
  Node,
  LinkedList,
};

const { nums, words } = require("./data/data.js");

class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(head = null){
    this.head = head;
  }

  insert(data){
    let newNode = new Node(data);
    if(this.head !== null){
      newNode.next = this.head;
    }
    this.head = newNode;
  }

  size(){
    let count = 0;
    let node = this.head;
    while(node){
      count ++;
      node = node.next;
    }
    return count;
  }

  delete(data){
    let count = 0;
    let node = this.head;
    while( node.data !== data && node.next ){
      count ++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for(let i = 1; i < count; i++){
      node = node.next;
    }
    node.next = foundNode.next
  }

  getFirst(){
    return this.head;
  }

  getLast(){
    let node = this.head;
    while(node.next){
      node = node.next;
    }
    return node;
  }

  search(data){
    let node = this.head;
    while(node.data !== data){
      node = node.next;
    }
    return node;
  }

  getKth(num){
    let node = this.head;
    let count = 1;
    while(node){
      if(count === num) return node;
    }
    count ++
    node = node.next
  }

  getKthToLast(kth){
    let count = 1;
    let nodeNum = this.size() - kth;
    let node = this.head;
    while(node){
      if(count === nodeNum) return node
      count++;
      node = node.next;
    }
  }

  isEmpty(){
    return this.head ? false : true
  }

  clear(){
    this.head = null;
  }

  toArray(){
    let node = this.head;
    let array = [];
    while(node){
      array.push(node.data);
      node = node.next;
    }
    return array;
  }

  containsDuplicates(){
    let currNode = this.head;
    let obj = {};
    while(currNode){
      if(obj[currNode.data]){
        return true
      }
      obj[currNode.data] = currNode.data; 
      currNode = currNode.next;
    }
    return false
  }
}

module.exports = {
  Node,
  LinkedList,
};

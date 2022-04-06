const { nums, words } = require("./data/data.js");


class Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
};

class LinkedList{
  constructor(head = null){
    this.head = head;
  }

  insert(value){
    let newNode = new Node(value);
    if (!this.head) {
        this.head = newNode;
    } else {
        newNode.next = this.head;
        this.head = newNode;
    }
  }

  size(){
    let count = 0;
    let temp = this.head;
    while(temp){
      count++;
      temp = temp.next;
    }
    return count;
  }

  delete(){

  }

  getFirst(){
      return this.head;
  }

  getLast(){
  
  }
  search(value){
      let temp = this.head
      while(temp){
        if(temp.data === value){
          return temp;
      }
    }
  }
  getKth(){

  }
  getKthToLast(){

  }
  isEmpty(){
    if(!this.head){
      return true
    } else {
      return false;
    }
  };
  clear(){
      this.head = null;
  }
  toArray(){

  }
  containsDuplicates(){

  }
}

module.exports = {
  Node,
  LinkedList,
};

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
    if(!this.head){
      this.head = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size(){

  }

  delete(){

  }

  getFirst(){
    
  }

}

module.exports = {
  Node,
  LinkedList,
};

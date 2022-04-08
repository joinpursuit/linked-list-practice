const { nums, words } = require("./data/data.js");

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  };
};

class LinkedList{
  constructor(head = null){
    this.head = head;
  };
// Methods
  insert(data){
    let newNode = new Node(data);
    if(!this.head){
      this.head = newNode;
    } else{
      newNode.next = this.head;
      this.head = newNode;
    };
  };

  size(){
    let count = 0;
    let node = this.head;
    while(node){
      count++;
      node = node.next;
    };
    return count;
  };

  delete(){

  };

  getFirst(){

  };

  getLast(){

  };

  search(){
    
  };

  getKth(){

  };

  getKthToLast(){

  };

  isEmpty(){

  };

  clear(){

  };

  toArray(){

  };

  containsDuplicates(){
    
  };
  


}


module.exports = {
  Node,
  LinkedList,
};

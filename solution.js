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
  insert(val){
    let newNode = new Node(val);
    if(this.head){
      newNode.next = this.head;
    };
    this.head = newNode;
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

  delete(data){
    let node = this.head;
    let counter = 0;
    while(node.data !== data && node.next){
      counter ++;
      node = node.next;
    };
    let foundNode = node;
    node = this.head;
    for(let i = 1;i < counter;i++){
      node = node.next;
    };
    node.next = foundNode.next;
  };

  getFirst(){
    return this.head;
  };

  getLast(){
    let node = this.head;
    if(!this.head) return null;
    while(node.next){
      node = node.next;
    };
    return node;
  };

  search(key){
    let node = this.head;
    while(node !== null && node.data !== key){
      node = node.next;
    };
    return node;
  };

  getKth(){

  };

  // Input is K 
  getKthToLast(k){

  };

  isEmpty(){
    if(!this.head){
      return true;
    } else{
      return false;
    };
  };

  clear(){
    this.head = null;
  };

  toArray(){

  };

  containsDuplicates(){
    
  };
};

let list = new LinkedList();
list.insert(1);
list.insert(2);
list.insert(3);


module.exports = {
  Node,
  LinkedList,
};

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
    let counter = 0;
    let node = this.head;
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

  getKth(k){
    let nodeNum = this.size() - k;
    let node = this.head;
    let count = 1;
    while(node && count === nodeNum){
      count++
      node = node.next;
    };
    return node;
  };

  // Input is K 
  getKthToLast(k){
    // k = 1, length = 11, nodeNum = 10
    // k = 5, length = 11, nodeNum = 6
    // k = 8, length = 11, nodeNum = 3
    let nodeNum = this.size() - k;
    
    // Traverse through linked list
    // let count = 1;
    let count = 1;
    let node = this.head;
    // let followNode = this.head;
    // for(let i = 1;i < k;i++){
    //   if(node === null) return null;
    //   node = node.next;
    // };
    // while(node){
    //   if(count === nodeNum){
    //     return node.data;
    //   }; 
    //     count++;
    //     node = node.next;
    // };
    while(node){
      node = node.next;
      followNode = followNode.next;
    };
    return followNode;
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
    let nodeArr = []
    let node = this.head;
    while(node){
      nodeArr.push(node.data);
      node = node.next;
    };
    return nodeArr;
  };

  containsDuplicates(){
    
  };
};

// let list = new LinkedList();
// list.insert(1);
// list.insert(2);
// list.insert(3);
// list.insert(4);
// list.insert(5);


module.exports = {
  Node,
  LinkedList,
};

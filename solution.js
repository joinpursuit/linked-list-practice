const { nums, words } = require("./data/data.js");

class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

class LinkedList{
  constructor(head = null){
    this.head = head;
  }
  insert(value){
    let newNode = new Node(value);
    if(this.head !== null){
      newNode.next = this.head;
    }
    this.head = newNode;
  }
  size(){
    let size = 0;
    let temp = this.head;
    while(temp){
      size++;
      temp = temp.next;
    }
    return size;
  }
  delete(value){
    let node = this.head;
    let counter = 0;
    while(node.data !== value && node.next){
      counter++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for(let i = 1; i < counter; i++){
      node = node.next;
    }
    node.next = foundNode.next;
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
  getKth(kth){
    let temp = this.head;
    let count = 1;
    while(temp){
      if(count === kth){
        return temp;
      } 
      count++;
      temp = temp.next;
    }
    return 0;
  }
  getKthToLast(kth){
    // k = 1, length = 11, nodeNum = 10
    // k = 5, length = 11, nodeNum = 6
    // k = 8, length = 11, nodeNum = 3
    // (length - 1) - k
    let nodeNum = this.size() - kth;
    let temp = this.head;
    let count = 1;

    while(temp){
      if(count === nodeNum){
        return temp;
      }
      count++;
      temp = temp.next;
    }
  }
  isEmpty(){
    let temp = this.head;
    if(temp === null){
      return true;
    } 
    return false
  }
  clear(){
    this.head = null;
  }
  toArray(){
    let temp = this.head;
    let arr = [];
    while(temp){
      arr.push(temp.data);
      temp = temp.next;
    }
    return arr; 
  }
  containsDuplicates(){
    let temp = this.head;
    let obj = {};
    while(temp){
      if(obj[temp.data]){
        return true;
      }
      obj[temp.data] = temp.data;
      temp = temp.next;
    }
    return false;
  }
}

let list = new LinkedList();
list.insert()

module.exports = {
  Node,
  LinkedList,
};

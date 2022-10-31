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
  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode; 
    } else {
      newNode.next = this.head;
      this.head = newNode; 
    }
  }

  
  size(){
    let count = 0;
    let node = this.head;
    while (node){
      count++;
      node = node.next;
    }
    return count;
  }

  
  delete(data){
    let count = 0;
    let node = this.head;
    while (node.data !== data && node.next){
      count++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < count; i++){
      node = node.next;
    }
    node.next = foundNode.next;
  }


  getFirst(){
    return this.head
   
  }

  
  getLast(){
    let node = this.head;
    while (node){
      node = node.next;
      if (node.next === null){
        return node;
      }
    }
  }

 
  search(data){
    let node = this.head;
    while (node.data !== data){
      node = node.next;
    }
    return node;
  }

  
  getKth(kth){
    let node = this.head;
    let count = 1;
    while (node){
      if (count === kth){
        return node;
      }
      count++;
      node = node.next;
    }
  }

  
  getKthToLast(kth){ 
    let nodeNum = this.size() - kth;

    let temp = this.head;
    let count = 1;
    while (temp){
      if (count === nodeNum){
        return temp;
      }
      count++;
      temp = temp.next;
    }
  }

 
  isEmpty(){
    let node = this.head;
    if (node === null){
      return true;
    }
    return false;
  }

  clear(){
    this.head = null;
  }

 
  toArray(data){
    let node = this.head;
    let newArr = [];

    while (node.next !== null){
      newArr.push(node.data)
      node = node.next;
    }
    newArr.push(node.data);
    return newArr;
  }

  containsDuplicates(){
    let currentNode = this.head;
    let obj = {};
    while(currentNode){
      if(obj[currentNode.data]){
        return true;
      }
      obj[currentNode.data] = currentNode.data;
      currentNode = currentNode.next;
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};

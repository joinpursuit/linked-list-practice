const { nums, words } = require("./data/data.js");

class Node {
  constructor(data){
    this.data = data;
    this.next = null
  }
}

class LinkedList{
  constructor(head = null){
    this.head = head
  }
  insert(data){
    let newNode = new Node(data)
    if(this.head !== null){
      newNode.next = this.head
    }
    this.head = newNode

  }
  size(){
    let size = 0
    let temp = this.head
    while(temp){
      size++
      temp = temp.next
    }
    return size
  }
  delete(data){
    let temp = this.head;
    let count = 0;
    while (temp.data !== data && temp.next){
      count++
      temp = temp.next
    }
    let key = temp;
    temp = this.head;
    for (let i = 1; i < count; i++){
      key = key.next;
    }
    temp.next = key.next
  }
  getFirst(){
      return this.head
  }
  getLast(){
    let temp = this.head
    while(temp.next){
      temp = temp.next
    }
    return temp
  }
  search(val){
    let temp = this.head
    while(temp){
      if(temp.data === val){
        return temp
      }
      temp = temp.next
    }
  }
  getKth(key){
    let temp = this.head
    for (let i = 0; i < key; i++){
      return temp
    }
  }
  getKthToLast(key){
  let nodeNum = this.size() - key
  let temp = this.head;
  let count = 1
    while(temp){
      if(count === nodeNum){
        return temp
      }
      count++
      temp = temp.next
    }
  }

  isEmpty(){
    return this.head === null
  }
  clear(){
    return this.head = null
  }
  toArray(){
    let array = []
    let temp = this.head
    console.log(temp)
    while (temp){
      array.push(temp.data)
      temp = temp.next
    }
    return array
  }

  containsDuplicates(){
     let temp = this.head
     let obj = {};
     while(temp){
       if(obj[temp.data]){
         return true
       }
       obj[temp.data] = temp.data;
       temp = temp.next;
     }
     return false
  }
}


module.exports = {
  Node,
  LinkedList,
};

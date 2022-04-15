const { nums, words } = require("./data/data.js");

class Node{
  constructor(data){
    this.data = data
    this.next = null
  }
}
class LinkedList{
  constructor(head=null){
    this.head = head
  }
  insert(value){
    let newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode
  }
  size(){
    let size = 0
    let temp = this.head;
    while (temp){
      size++
      temp= temp.next
    }
    return size
  }
  getKthToLast(k){
    let nodeNum = this.size() - k
    let temp = this.head
    let count = 1
    while (temp){
      if(count === nodeNum){
        return temp;
      }
      count++
      temp = temp.next
    }
  }
  getLast(){
    let nodeNum = this.size()-1
    let temp = this.head
    let count = 0
    while (temp){
      if(count === nodeNum){
        return temp;
      }
      count++
      temp = temp.next
    }
  }
    isEmpty(){
      return !this.head
    }
  }

module.exports = {
  Node,
  LinkedList,
};

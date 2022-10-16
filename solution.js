const { nums, words } = require("./data/data.js");

class Node {
  constructor(data,next){
    this.data = data;
    this.next = next;
  }
}
class LinkedList{
  constructor(head = null){
    this.head = head;
  }

  insert(data){
    let newNode = new Node(data)
    if(!this.head){
      this.head = newNode
    }else{
      newNode.next = this.head
      this.head = new Node
    }
  }

  size(){
    let count = 0;
    let node = this.head;
    while(node){
      count++;
      node = node.next 
    }
    return count
  }

}


module.exports = {
  Node,
  LinkedList,
};

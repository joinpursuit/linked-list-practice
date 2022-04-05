// const { nums, words } = require("./data/data.js");

class Node{
  constructor(data = null, next = null){
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }

  insert(data){
    const node = new Node(data)

    if(this.head === null){
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
  }

  size(){

  }
 
}

const someList = new LinkedList(10)
// someList.insert(5)

console.log(someList.size())

module.exports = {
  Node,
  LinkedList,
};

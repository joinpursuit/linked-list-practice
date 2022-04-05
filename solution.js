const { nums, words } = require("./data/data.js");

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

  insert(){
    const node = new Node(data)
  }
}

module.exports = {
  Node,
  LinkedList,
};

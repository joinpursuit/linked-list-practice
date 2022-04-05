const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data || null;
    this.next = next || null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head || null;
  }

  insert(value) {
    let newNode = new Node(value)
    
    let node = this.head 
    
    //insert at the beginning for when we're starting from scratch OR when there's already data
    if (node == null || node.data > value) {
      newNode.next = node
      this.head = newNode
    }
    
    //insert in the middle and end... 
    while(node) {
      if (node.data < value && node.next == null) {
        let temp = node.next
        node.next = newNode
        newNode.next = temp
      }
      node = node.next
    }

    return this.head

  }

  size() {
    let counter = 0;

    let currNode = this.head;

    while (currNode) {
      counter++
      currNode = currNode.next
    }

    return counter

  }
}


module.exports = {
  Node,
  LinkedList,
};

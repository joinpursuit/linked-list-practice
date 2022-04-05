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
    
    //for numList
    if (typeof value === "number") {

      //insert at the beginning for when we're starting from scratch OR when there's already data
      if (node == null || node.data > value) {
        newNode.next = node
        this.head = newNode
      }
      
      //insert in the end... 
      while(node) {
        if (node.data < value && node.next == null) {
          let temp = node.next
          node.next = newNode
          newNode.next = temp
        }
        node = node.next
      }
      return this.head
    } else {
      //insert at the beginning for when we're starting from scratch OR when there's already data
      if (node == null) {
        // newNode.next = node
        this.head = newNode
      }
      console.log(node)
      //insert in the end... 
      while(node) {
        if (node.next == null) {
          // let temp = node.next
          node.next = newNode
          newNode.next = null
        }
        node = node.next
      }
      return this.head
    }

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

  delete(value) {
    let currNode = this.head
    if (currNode.data === value) {
      this.head = currNode.next 
    }

    while (currNode) {
      if (currNode.next) {
        if (currNode.next.data === value) {
          currNode.next = currNode.next.next
          return this.head
        } else {
          currNode = currNode.next
        }
      }
    }
  }

  getFirst() {
    let node = this.head 

    while (node) {
      if (node.next == null) {
        return node
      }
      node = node.next
    }
  }

  getLast() {
    let node = this.head 
    return node
  }

}


module.exports = {
  Node,
  LinkedList,
};

const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(data) {
    const node = new Node(data);
    if(!this.head){
      this.head = node;
    } else {
      node.next = this.head;
      this.head = node;
    }
  }
  size() {
    let count = 0;
    let node = this.head;
    while(node) {
      count++;
      node = node.next;
    }
    return count;
  }
  delete(val) {
    let prevalue = this.head;
    let currvalue = prevalue.next;
    if(prevalue.data === val) {
      this.head = currvalue;
    } else {
      while(currvalue) {
        if(currvalue.data === val) {
          prevalue.next = currvalue.next;
          break;
        } else {
          let temp = currvalue.next;
          prevalue = currvalue;
          currvalue = temp;
        }
      }
    }
  }
  
}


// const newNode = new Node(111);
// const secondNode = new Node(2);
// newNode.next = secondNode;
// // newNode.insertFirst(111)
// console.log(newNode)


module.exports = {
  Node,
  LinkedList,
};

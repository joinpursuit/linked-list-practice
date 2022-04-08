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
    const newNode = new Node(data);
    if(!this.head){
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
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

  getFirst() {
    return this.head
  }

  getLast() {
    let node = this.head;
    if (!this.head) {
      return null;
    } else {
      while(node.next) {
        node = node.next;
      }
    }
    return node;
  }

  search(val) {
    let node = this.head;
    while(node) {
      if(node.data === val) {
        return node;
      } else {
        node = node.next;
      }
    }
  }

  getKth(index) {
    let node = this.head;
    if(index === 1) {
      return node;
    } else {
      let count = 1;
      while(count <= index) {
        count++;
        node = node.next;
      }
      return node;
    }
  }

  getKthToLast(index) {
    let node = this.head;
    let count = 1;
    index = (this.size()-1) - index;
    while(count <= index) {
      count++;
      node = node.next;
    }
    return node;
  }

  isEmpty() {
    return this.head === null;
  }

  clear() {
    this.head = null;
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

const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(value) {
    let nextNode = new Node(value);
    if (!this.head) {
      this.head = nextNode;
    } else {
      nextNode.next = this.head;
      this.head = nextNode;
    }
  }

  size() {
    let sizeCount = 0;
    let node = this.head;
    while (node) {
      //increment count
      sizeCount++
      nextNode = node.next;
    }
    return sizeCount
  }

  //delete

  delete(data) {
    if (this.head.data === data) {
      this.head = this.head.next;
    }
    let nextNode = this.head;
    while (nextNode.next) {
      if (nextNode.next.data === data) {
        nextNode.next = nextNode.next.next;
      }
      nextNode = nextNode.next;
    }
  };

  getFirst() {
    return this.head;
  }

  getLast() {
    let finalNode = this.head;
    if (finalNode) {
      while (finalNode.next) {
        finalNode = finalNode.next
      }
    }
    return finalNode
  }


  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }

  getKth(arrayIndex) {
    let arrayCount = 1
    let head = this.head

    while (head) {
      if (arrayIndex === arrayCount) {
        return head;
      }
      arrayCount++
      head = head.next;
    }
    return arrayCount

  }

  getKthToLast() {

  }
  isEmpty() {
    if (!this.head) {
      return true;
    }
    return false;
  }
  clear() {
    this.head = null;
  }

  containsDuplicates() {

    let arr = [];
    let nextNode = this.head;
      while (nextNode) {
        if (arr.includes(nextNode.data)) {
          return true;
        }
          arr.push(nextNode.data);
          nextNode = nextNode.next;
        }
        return false;
    }
}





//getting first element 






module.exports = {
  Node,
  LinkedList,
};

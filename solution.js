const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head;
  }

  insert(value) {
    let newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let length = 0;
    let tempNode = this.head;

    while (tempNode) {
      length++;
      tempNode = tempNode.next;
    }

    return length;
  }

  delete(key) {
    if (!this.head) {
      return;
    }

    let tempNode = this.head;
    let counter = 1;
    while (tempNode) {
      if (tempNode.data === key) {
        break;
      }
      counter++;
      tempNode = tempNode.next;
    }

    if (counter === 1) {
      this.head = this.head.next;
    } else {
      let currentNode = this.head;
      for (let i = 1; i < counter - 1; i++) {
        currentNode = currentNode.next;
      }
      currentNode.next = currentNode.next.next;
    }
  }

  getFirst() {
    if (this.head) {
      return this.head;
    }
  }

  getLast() {
    let tempNode = this.head;
    while (tempNode.next) {
      tempNode = tempNode.next;
    }
    return tempNode;
  }

  search(key) {
    let tempNode = this.head;
    while (tempNode) {
      if (tempNode.data === key) {
        return tempNode;
      }
      tempNode = tempNode.next;
    }
  }

  getKth(k) {
    let counter = 1;
    let tempNode = this.head;

    while (tempNode) {
      if (counter === k) {
        return tempNode;
      }
      counter++;
      tempNode = tempNode.next;
    }
  }

  getKthToLast(k) {
    let index = this.size() - k;
    return this.getKth(index);
  }

  isEmpty() {
    return this.size() === 0;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let arr = [];
    let tempNode = this.head;
    while (tempNode) {
      //console.log(tempNode.data);
      arr.push(tempNode.data);
      tempNode = tempNode.next;
    }

    //console.log(arr);

    return arr;
  }

  containsDuplicates() {
    let checkObj = {};
    let tempNode = this.head;
    while (tempNode) {
      if (checkObj[tempNode.data]) {
        checkObj[tempNode.data] += 1;
      } else {
        checkObj[tempNode.data] = 1;
      }
      tempNode = tempNode.next;
    }

    for (let key in checkObj) {
      if (checkObj[key] > 1) {
        return true;
      }
    }

    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};

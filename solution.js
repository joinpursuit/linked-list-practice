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
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode
    }
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next
    }
    return count;
  }

  delete(data) {
    let node = this.head;
    let counter = 0;
    while (node.data !== data && node.next) {
      counter++;
      node = node.next
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++) {
      node = node.next
    }
    node.next = foundNode.next;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    if (!this.head) return null;
    while (node.next) {
      node = node.next
    }
    return node;
  }

  search(itemToFind) {
    let node = this.head;
    while (node !== null && node.data !== itemToFind) {
      node = node.next;
    }
    return node
  }

  getKth(k) {
    let current = this.head;
    let count = 1;

    while (current != null) {
      if (count == k) {
        return current;
      }
      count++;
      current = current.next;
    }
    return 0;
  }

  getKthToLast(k) {
    let lastElement = this.size() - k;
    let current = this.head;
    let count = 2;
    while (count <= lastElement) {
      current = current.next;
      count++;
    }
    return current;
  }

  isEmpty() {
    let node = this.head;
    return (!node) ? true : false
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let arr = [];
    let node = this.head;
    let count = 0;
    let length = this.size();
    while (count < length) {
      arr.push(node.data)
      count++;
      node = node.next;
    }
    return arr;
  }

  containsDuplicates() {
    let current = this.head;
    let nextCurrent = current.next;
    let count = 0;
    let length = this.size();
    while (count < length && nextCurrent !== null){
      if (current !== nextCurrent){
        nextCurrent = nextCurrent.next;
      } else {
        return true;
      }
      count++;
    }
    return false;
   
  }

}






module.exports = {
  Node,
  LinkedList,
};

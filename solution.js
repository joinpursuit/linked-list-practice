const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }
  insert(data) {
    let newNode = new Node(data, this.head);
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  delete(index) {
    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      current = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next = current.next;
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    let previous;
    while (current) {
      previous = current;
      current = current.next;
    }
    return previous;
  }

  search(num) {
    let current = this.head;
    let count = 0;
    while (count <= this.size()) {
      count++;
      if (num === current.data) {
        return current;
      }
      current = current.next;
    }
  }

  getKth(num) {
    let current = this.head;
    let count = 1;
    while (count < num) {
      count++;
      current = current.next;
    }
    return current;
  }

  isEmpty() {
    return !this.size();
  }

  clear() {
    this.head = null;
  }

  toArray() {
    const array = [];
    let current = this.head;
    let count = 0;
    while (count < this.size()) {
      count++;
      array.push(current.data);
      current = current.next;
    }
    console.log(array);
    return array;
  }

  // toArray() {
  //   let current = this.head;
  //   let array = [];
  //   let count = 0;
  //   while (current) {
  //     console.log(current);
  //     array[count] = current.data;
  //     current = current.next;
  //     count++;
  //   }

  //   return array;
  // }

  containsDuplicates() {
    let current = this.head;
    const dupCollection = {};
    while (current) {
      if (dupCollection[current.data]) {
        return true;
      } else {
        dupCollection[current.data] = 1;
      }
      current = current.next;
    }
    return false;
  }

  getKthToLast(num) {
    let current = this.head;
    let count = 1;
    while (count < this.size() - num) {
      count++;
      current = current.next;
    }
    return current;
  }
}

module.exports = {
  Node,
  LinkedList,
};

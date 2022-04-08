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

  // insert(data) {
  //   let newNode = new Node(data);
  //   if (!this.head) {
  //     this.head = newNode;
  //   } else {
  //     let tail = this.head;
  //     while (tail.next !== null) {
  //       tail = tail.next;
  //     }
  //     // newNode.next = this.head;
  //     tail.next = newNode;
  //   }
  // }

  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }

  delete(data) {
    let node = this.head;
    let counter = 0;
    while (node.data !== data && node.next) {
      counter++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++) {
      node = node.next;
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
      node = node.next;
    }
    return node;
  }

  search(val) {
    let node = this.head;
    while (node !== null && node.data !== val) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  isEmpty() {
    // let count = 0;
    let node = this.head;
    // while (node) {
    //   count++;
    //   node = node.next;
    // }
    // return count === 0;
    return node ? false : true;
  }

  toArray() {
    let arr = [];
    let node = this.head;
    for (let i = 0; i < this.size(); i++) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }

  getKth(k) {
    let node = this.head;
    for (let i = 1; i < k; i++) {
      node = node.next;
    }
    return node;
  }

  getKthToLast(k) {
    let node = this.head;
    for (let i = 1; i < this.size() - k; i++) {
      node = node.next;
    }
    return node;
  }

  containsDuplicates() {
    let node = this.head;
    let obj = {};

    while (node !== null) {
      if (obj[node.data]) {
        obj[node.data] += 1;
        node = node.next;
      } else {
        obj[node.data] = 1;
        node = node.next;
      }
    }
    for (const key in obj) {
      if (obj[key] > 1) {
        return true;
      }
    }
    console.log(obj);
    return false;
  }
}

let prevNode = new Node("the");
let wordsList = new LinkedList(prevNode);
for (let i = 0; i < words.length; i++) {
  let currentNode = new Node(words[i]);
  prevNode.next = currentNode;
  prevNode = currentNode;
}

console.log(wordsList.getKth(2));

console.log(wordsList);

console.log(wordsList.getKthToLast(1));

module.exports = {
  Node,
  LinkedList,
};

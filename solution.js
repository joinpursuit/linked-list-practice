// const { nums, words } = require("./data/data.js");
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const words = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

class Node {
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(value){
    let newNode = new Node(value);
    newNode.next = this.head; 
    this.head = newNode;
  }

  size () {
    let count = 0;
    let node = this.head;

    while(node) {
      count++;
      node = node.next;
    }
    return count;
  }

  // delete() {

  // }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while(node.next) {
      node = node.next;
    }
    return node;
  }

  search(value) {
    let node = this.head;
    while(node.data === value) {
      node = node.next;
    }
    return node;
  }

  getKth(index) {

  }

  getKthToLast() {

  }

  isEmpty() {
    return this.head === null;
  }

  clear() {
    this.head = null;
  }

  
  toArray(){
    let arr = [];
    let node = this.head;

    while(node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
  }
  
}

// let LinkedList1 = new LinkedList();
// for (let num of nums) {
//   console.log(num)
//   LinkedList1.insert(num)
// }

// let LinkedList2 = new LinkedList();
// for (let word of words) {
//   LinkedList2.insert(word)
// }

// console.log(LinkedList1.size());
// console.log(LinkedList2.size());

// console.log(LinkedList1.toArray(words))

module.exports = {
  Node,
  LinkedList,
};

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
    this.size = 0;
  }

  insert(value){
    let newNode = new Node(value);
    newNode.next = this.head; 
    this.head = newNode;
  }
}

let newLinkedList1 = new LinkedList();

for(let num of nums){
  // console.log(num)
  newLinkedList1.insert(num)
}

let newLinkedList2 = new LinkedList();
for(let word of words){
  newLinkedList2.insert(word)
}


module.exports = {
  Node,
  LinkedList,
};

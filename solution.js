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
  delete(val) {
    let node = this.head;
    let count = 0;
    while (node.data !== val && node.next) {
      count++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < count; i++) {
      node = node.next;
    }
    node.next = foundNode.next;
  }
  getFirst() {
    let node = this.head;
    return node;
  }
  getLast() {
    let node = this.head;
    if (!node) return null;
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
  getKth(k) {
    let count = 1;
    let node = this.head;
    while (count < k) {
      node = node.next;
      count++;
    }
    return node;
    // let node = this.head;
    // for (let i = 1; i < k; i++) {
    //   node = node.next;
    // }
    // return node;
  }
  getKthToLast(indx) {
    let node = this.head;
    let count = 0;
    while (node !== null) {
      node = node.next;
      count++;
    }
    if (count < indx) return;
    node = this.head;
    for (let i = 1; i < count - indx; i++) {
      node = node.next;
    }
    return node;
  }
  isEmpty() {
    let node = this.head;
    return node ? false : true;
  }
  clear() {
    // let node = this.head;
    return (this.head = null);
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
// const numLists = new LinkedList();
// const wordLists = new LinkedList();

//  console.log(numLists.insert(nums))
//  console.log(wordLists.insert(words))

let previousWord = new Node("Jan");
let wordList = new LinkedList(previousWord);
for (let i = 0; i < words.length; i++) {
  let currentWord = new Node(words[i]);
  previousWord.next = currentWord;
  previousWord = currentWord;
}
// nums
let previousNode = new Node(1);
let numList = new LinkedList(previousNode);
for (let i = 0; i < nums.length; i++) {
  let currentNode = new Node(nums[i]);
  previousNode.next = currentNode;
  previousNode = currentNode;
}
// console.log(wordList);
// console.log(numList);
// console.log(numList.size());
// console.log(numList.delete(2));
// console.log(numList.search(3));
console.log(numList.getKthToLast(2));
console.log(numList.containsDuplicates());

module.exports = {
  Node,
  LinkedList,
};

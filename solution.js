const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    // this.tail = null;
    this.length = 0;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;
    return this.head;
  }

  size() {
    return this.length;
  }

  delete(input) {
    // deleting by value
    if (this.length === 0) return;
    let current = this.head;
    let prev = null;
    if (current !== null && current.data === input) {
      head = current.next;
      return;
    }

    while (current !== null && current.data !== input) {
      prev = current;

      current = current.next;
    }
    if (current.data === input) {
      prev.next = current.next;
    }
    this.length--;

    // deleting by index
    // if (this.length === 0) return;
    // this.length--;
    // let current = this.head;
    // if (input <= 0) {
    //   this.head = this.head.next;
    // } else if (input >= this.length - 1) {
    //   while (current.next.next !== null) {
    //     current = current.next;
    //   }
    //   current.next = null;
    // } else {
    //   let i = 0;
    //   while (i < input) {
    //     current = current.next;
    //     i++;
    //   }
    //   current.next = current.next.next;
    // }
  }

  getFirst() {
    return this.tail;
  }

  getLast() {
    return this.head;
  }

  search(input) {
    let current = this.head;
    while (current.next !== null) {
      if (current.data === input) {
        return current;
      }
      current = current.next;
    }
    return false;
  }

  getKth(K) {
    //if (K === 1) return this.tail;
    let current = this.head;
    for (let i = 1; i <= this.length - K; i++) {
      current = current.next;
    }
    return current;
  }

  getKthToLast(K) {
    let current = this.head;
    for (let i = 1; i <= K; i++) {
      current = current.next;
    }
    return current;
  }

  isEmpty() {
    return this.length === 0;
  }

  clear() {
    this.head = null;
    return this.head;
  }

  toArray() {
    let arr = [];
    let current = this.head;
    while (current !== null) {
      arr.unshift(current.data);
      current = current.next;
    }
    return arr;
  }

  containsDuplicates() {
    if (!this.head || !this.head.next) return false;
  
    let nodes = {};
    let prev = this.head;
    let current = prev.next;
    nodes[prev.data] = true;

    while (current) {
      if (nodes[current.data]) {
        return true;
      } else {
        current = current.next;
      }
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};

// wordList = new LinkedList();
// function insertWords(words) {
//  // console.log(words)
//   for (let word of words) {
//     wordList.insert(word);
//   }
// }

// numList = new LinkedList();
// function insertNums(nums) {
//   //console.log(nums)
//   for (let num of nums) {
//     numList.insert(num);
//   }
// }

//insertWords(words);
//insertNums(nums);

//numList.toArray()

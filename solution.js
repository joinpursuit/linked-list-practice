const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next ? next : null;
  }
}

class LinkedList {
  constructor(head) {
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

  delete(data) {
    //3
    //node.data[1],next -> 1/ etc
    let node = this.head;
    let counter = 0;
    //node.data - 1 is not qual to data(argument - 3 AND node.next exists ( which is 2))
    //node.data -2 still not equal AND node.next does exist with the value of 3
    //node.data -3 is equal so bye!
    while (node.data !== data && node.next) {
      //add 1 to the counter
      //add 1 again to the counter - counter is 2
      counter++;
      //reassign node 1 to be the node that stores 2
      //reassign node 2 to be the node that stores 3
      node = node.next;
    }
    //storing the node that beat the loop in the variable found Node,in this case node.data is 3
    let foundNode = node;
    //reassign node to store the value of the head which is 1
    node = this.head;
    //we loop, I is = 1, i less than the counter which is 2; and we increment by 1
    for (let i = 1; i < counter; i++) {
      //we reassiogn node to be node.next
      //1 =2,node.data =2, node.next =2
      node = node.next;
    }
    //node.next is 3
    //foundNode.next is 4
    //the new next for 2 is four
    node.next = foundNode.next;
  }

  size() {
    let counter = 0;
    let currentNode = this.head;
    while (currentNode != null) {
      counter++;
      currentNode = currentNode.next;
    }
    return counter;
  }

  search(data) {
    let node = this.head;
    while (node.data !== data) {
      node = node.next;
    }
    return node;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let node = this.head;
    while (node.next !== null) {
      node = node.next;
    }
    return node;
  }

  //9th
  getKth(data) {
    let node = this.head;
    let counter = 1;
    while (counter < data) {
      node.next = node;
      counter++;
    }
    // console.log(node);
    return node;
  }

  //2nd to from last
  getKthToLast(data) {
    return [];
    // console.log(data);
    // console.log(this.size());
    //  let position = this.size() - data;
    // console.log(Number(position));
    // console.log(position);
    // let node = this.head;
    // console.log(node);
    // let counter = 1;
    // while (counter < position) {
    //   counter++;
    //   node.next = node;
    // }
    // console.log(node);
    // return node;
  }

  isEmpty() {
    if (this.head === undefined) {
      return true;
    } else {
      return false;
    }
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let node = this.head;
    let array = [];
    while (node.next !== null) {
      // console.log(node);
      array.push(node.data);
      // console.log(node.next);
      node = node.next;
    }
    array.push(node.data);
    return array;
  }

  containsDuplicates() {
    let linkedListArrayed = this.toArray();
    let node = this.head;

    while (node.data) {
      // console.log(node);
      if (linkedListArrayed.includes(node.data)) {
        return true;
      } else {
        // console.log(node.next);
        node = node.next;
      }
    }
    return false;
  }
}

// wordList = new LinkedList();
// for (let word of words) {
//   wordList.insert(word);
// }

// numsList = new LinkedList();
// for (let number of nums) {
//   numsList.insert(number);
// }

// console.log(numsList);
// console.log(numsList.delete(10), numsList);
// console.log(wordList);

// console.log(wordList);
// let nodeNum1 = new Node(nums[0]);
// let nodeNum2 = new Node(nums[1]);
// nodeNum1.next = nodeNum2;
// // console.log(nodeNum1);

// let list = new LinkedList(nodeNum1);

// console.log(list.size());
// console.log(list.insert(3));

module.exports = {
  Node,
  LinkedList,
};

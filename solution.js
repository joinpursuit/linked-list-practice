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

  getFirst(data) {
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

  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  getKth(position) {
    let node = this.head;
    let count = 1;
    // [1 < 1  = node. ]
    while (count < position) {//give me the length of the list.
      count++;
      node = node.next; //goes down the node list
    }
return node

  // let  node = this.head;
    //reset to the start of the list.
//count = 10 - 1 = 9  -- 8  
//nodelist - 1 = first element 
//
// count = 10. 1 - list - 
//position = 1
//     for (let i = 1; i < position-1; i++) {//looping the list. 
// //starting from first item on the list. - 
// //keep looping if the num is less

//       node = node.next
//     }
//     // i = 10


//     return node;



//10 > 1 = 9> 1   2 > 1 break loop - return node


    // return count;
    // return node;
    //get the element at the given index.
    //notice - the elements are reversed.
    //loop through stop at index and return data
  }

  getKthToLast(position){ 
    let countBackwards = this.size() - position;

    let node = this.head;
    let count = 1;
    while (node){
      if (count === countBackwards){
        return node;
      }
      count++;
      node = node.next;
    }
  }

  isEmpty() {
    return this.head === null;
  }

  toArray(data) {
    let node = this.head; //starting node. {data: 0, next: null}
    let listArr = [];
    //loop though all nodes
    //push into array.

    while (node !== null) {
      //if node is not empty. = meaning there is data/value there.
      listArr.push(node.data); //push that value/node into array.
      node = node.next; //goes down the node list
    }
    //will stop the loop when hit the last node - since last node.next is gonna be null
    return listArr;
    //
  }

  containsDuplicates(data) {
    //return true or false;
    //loop through all of the item in the list.
    //how do we check for dup? how do we know if the value exist before?.
    //maybe a counter?
    //{1 : counter, 2 : counter}
    let node = this.head;
    const obj = {};

    while (node) {
      if (obj[node.data]) {//if already exist - return true cuz u know it dups. 
        return true;
      } else {
        obj[node.data] = 1;// make the obj and add 1. 
      }
      node = node.next;
    }
    return false;

  }
}

module.exports = {
  Node,
  LinkedList,
};

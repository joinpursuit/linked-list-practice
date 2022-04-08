const util = require("util");
const { nums, words } = require("./data/data.js");

/* Create a Node class with properties: data, next */
class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

/* Create a linked list with properties: head */
class LinkedList {
  constructor(head = null){
    this.head = head;
  }
  insert(data){
    let newNode = new Node(data);
    if (this.head !== null){
      newNode.next = this.head;
    }
    this.head = newNode;
  }
  
  // finding the number of nodes in the LinkedList. Use an accumulator - start at zero
  size(){
    let count = 0;
    let node = this.head;
    while (node){
      count++;
      node = node.next;
    }
    return count;
  }

  // Let's delete a node with a specific key.
  delete(data){
    let count = 0;
    let node = this.head;
    while (node.data !== data && node.next){
      count++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    for (let i = 1; i < count; i++){
      node = node.next;
    }
    node.next = foundNode.next;
  }

  // get the first node
  getFirst(){
    let node = this.head;
    return node;
  }

  // This will get the last node of our linked list.
  getLast(){
    let node = this.head;
    while (node){
      node = node.next;
      if (node.next === null){
        return node;
      }
    }
  }

  // `search` an element by key and return data
  search(data){
    let node = this.head;
    while (node.data !== data && node.next){
      node = node.next;
    }
    return node;
  }

  // `getKth` retrieve kth element
  getKth(kth){
    let node = this.head;
    let count = 1;
    while (node){
      if (count === kth){
        return node;
      }
      count++;
      node = node.next;
    }
  }

  // `getKthToLast` retrieve kth from last element
  getKthToLast(k){ // 1
    let nodeNum = this.size() - k;

    let temp = this.head;
    let count = 1;
    while (temp){
      if (count === nodeNum){
        return temp;
      }
      count++;
      temp = temp.next;
    }
  }

  // `isEmpty` check if list is empty
  isEmpty(){
    let node = this.head;
    if (node === null){
      return true;
    }
    return false;
  }

  // This will clear our linked list of all the nodes.
  clear(){
    this.head = null;
  }

  // `toArray` convert data from linked list to an array
  toArray(data){
    let node = this.head;
    let newArr = [];

    while (node.next !== null){
      newArr.push(node.data)
      node = node.next;
    }
    newArr.push(node.data);
    return newArr;
  }

  // `containsDuplicates` check for duplicates - return true if contains duplicates, false if not
  containsDuplicates(){
    let node = this.head;
    let obj = {};
    while (node){
      if (node.data in obj){
        obj[node.data] += 1;
      } else {
        obj[node.data] = 1;
      }
      node = node.next;
    }
    return Object.values(obj).includes(2); // boolean
  }
}

module.exports = {
  Node,
  LinkedList,
};

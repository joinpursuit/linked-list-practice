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

  // This insert will insert at the head.
  // insert from the beginning - if head is null, set null to the `newNode`. Else add a new node to beginning.
  insert(data){
    let newNode = new Node(data);
    if (this.head === null){
      this.head = newNode; 
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
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
    // while the current node.data is not equal to the passed in data; and a next node exists (true) 
    while (node.data !== data && node.next){
      count++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    // count is at zero. iterate over the count, starting at 1. Why are we looping over the count?
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
      // if the next node is pointing to null, return the last node.
      if (node.next === null){
        return node;
      }
    }
  }

  // `search` an element by key and return data
  // This will allow us to search for a matching piece of data.
  search(data){
    let node = this.head;
    while (node.data !== data && node.next){
      node = node.next;
    }
    return node;
  }

  // `getKth` retrieve kth element
  getKth(data){
    // let node = this.head;
    // console.log("???Node:", node);
    // while (node.data !== data && node.next){
    //   console.log("---this.head", this.head)
    //   console.log("??node.next:", node.next)
    //   console.log("???node.data", node.data)
    //   console.log("whatisdata??:", data)
    //   node = node.next;
    // }
    // return node;
  }

  // `getKthToLast` retrieve kth from last element
  getKthToLast(){}

  // `isEmpty` check if list is empty
  isEmpty(){
    let node = this.head;
    if (node === null){
      return true;
    }
    return false;
  }

  // This will clear our linked list of all the nodes.
  // moving the pointer of this.head to "nothing"/null
  clear(){
    this.head = null;
  }

  // `toArray` convert data from linked list to an array
  // Question - where is #10???
  // 4-7-22 Sam posted on slack: Error in test. Fetch upstream.
  // After fetch: now passing this test.
  toArray(data){
    // let something = data
    // console.log("something:", something)
    let node = this.head;
    // console.log("util:", util.inspect(node, true, 11, true))
    let newArr = [];

    while (node.next !== null){
      // console.log("nodeeeee:", node.data)
      newArr.push(node.data)
      node = node.next;
    }
    newArr.push(node.data);
    // console.log("??newArr:", newArr)
    return newArr;
  }

  // `containsDuplicates` check for duplicates - return true if contains duplicates, false if not
  containsDuplicates(){
    // if duplicates - return true
    // else, return false
  }
}


// Testing insert method:
// let newList = new LinkedList();
// newList.insert(111);
// console.log(newList)

module.exports = {
  Node,
  LinkedList,
};

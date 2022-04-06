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
    let count = 0;
    while (node){
      count++;
      node = node.next;
      // if the next node is pointing to null, return the last node.
      if (node.next === null){
        return node;
      }
    }
  }

  // This will allow us to search for a matching piece of data.
  search(){}
  getKth(){}
  getKthToLast(){}
  isEmpty(){}
  // This will clear our linked list of all the nodes.
  clear(){}
  toArray(){}
  containsDuplicates(){}
}

// Testing insert method:
// let newList = new LinkedList();
// newList.insert(111);
// console.log(newList)

module.exports = {
  Node,
  LinkedList,
};

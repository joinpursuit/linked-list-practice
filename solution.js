const {inspect} = require("util")
const { nums, words } = require("./data/data.js");

class Node {
  /* new node constructor property 
  next = null
  this.next = next; 
  this.head = new Node(data, this.head);
  */
  constructor(data){
      this.data = data;
      this.next = null; 
  }
}

class LinkedList {
  constructor(head){
      this.head = head;
  }

  /*

  1. insert data at the head (below)

  2. insert data anywhere (it kinda w o r k s, see below)
  insert(data){ 
    let newNode = new Node(data);
    
    if (!this.head) {
      this.head = newNode;
    } 

    // ... checking to see if this.head.data > newNode.data
    // 1 > 2
    if (this.head.data > newNode.data) {
      /// ... reassigning this.head
      const temp = this.head;
      newNode.next = temp;
      this.head = newNode;
      return this.head
    }
    
    let currentNode = this.head

    while (currentNode) {
      // .... in the case of numbers and words
      //  1 2 3 4 5 (6)
      // ... checking to see if currentNode.next exists
      if (!currentNode.next || currentNode.next.data > newNode.data) {
        // ... temp = currentNode.next 
        // ... build connections
        // ... assign pointer newNode.next = temp
        // ... assign currentNode.next = newNode

        const temp = currentNode.next;
        newNode.next = temp;
        currentNode.next = newNode;
      }

      currentNode = currentNode.next;
    }

    return this.head;
  }
  */
  
  insert(data){ 
    const newNode = new Node(data);
    const oldHead = this.head;
    this.head = newNode;
    newNode.next = oldHead;
  
    return this.head;
  }
  
  
  size() {
    let countSize = 0;
    let currentNode = this.head; 
    while(currentNode){
        countSize++;
        currentNode = currentNode.next;
    }
    return countSize;
  }

  // contributor Josh Marte
  delete(data) {
    // ... edge case if this.head === data
    if (this.head === data) {
      this.head = this.head.next;
    }

    // ... traverse the linked node 
    let currentNode = this.head;  //> 9, 0
    while(currentNode.next) { //> 10, null (loop ends)
      // ... delete the next node (so can't be undefined) === data 
      if(currentNode.next.data === data) { //> 10 === 10
        // ... I need to put together the linkedList w/o the currentNode
        // 1 2 3 4 5 6 7 8 9 (10) 0
        currentNode.next = currentNode.next.next; //> 9 points to 0
        
      }
      currentNode = currentNode.next // 0
    }
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let currentNode = this.head; 
    while(currentNode){
      // Why can't currentNode.next be set to === null?
      // instead of loosely equal to use !bang operator
      if (!currentNode.next) {
        return currentNode;
      }
      currentNode = currentNode.next;
    }
  }

  search(data){
    let currentNode = this.head;
    while(currentNode){
      if (currentNode.data === data){
          return currentNode;
      }
      currentNode = currentNode.next;
    }
    currentNode = currentNode.next
    return false;
  }

  getKth(data) {
    let currentNode = this.head;
    let counter = 1;
    while(currentNode) {
      if(counter === data) {
        return currentNode;
      }
      counter++;
      currentNode = currentNode.next;
    }
  }

  // Contributor Josh Marte
  getKthToLast(data) {
    let currentNodeSize = this.size(); //> nums size/length = 11
    return this.getKth(currentNodeSize - data); //> 11-1 = 10 -> 2
  }
  
  isEmpty() {
    // ... this.head === null (true) otherwise false
    if (!this.head) {
      return true;
    }
    return false;
  }

  clear() {
    this.head = null; 
  }
  
  toArray() {
    let nums = [];
    let currentNode = this.head;
    while(currentNode) {
      nums.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return nums;
  }

  containsDuplicates() {
    let numsOrWords = this.toArray()

    return (new Set(numsOrWords)).size !== numsOrWords.length;
  }

};


let numList = new LinkedList();
  for (let num of nums) {
    console.log(num);
    numList.insert(num);
  }

console.log(inspect(numList, {colors: true, depth: 20}));
  

module.exports = {
  Node,
  LinkedList,
};

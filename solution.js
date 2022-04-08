// const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next = null) {
    this.data = data ;
    this.next = next ;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insert(data) {
    // console.log(data, this.head)
    this.head = new Node(data, this.head);
    // console.log(this.head)
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  delete(index) {
    // if (index > 0 && index > this.size()) {
    //   return;
    // }

    let current = this.head;
    let previous;
    let count = 0;

    if (index === 0) {
      current = current.next;
    } else {
      while (count < index) {
        count++;
        previous = current;
        current = current.next;
      }

      previous.next= current.next;
    }
  
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let current = this.head;

    while (current) {
      if (!current.next) {
        return current;
      }
      current = current.next;
    }
  }

  isEmpty() {
    if (!this.head) {
      return true;
    }
    return false;
  }

  getKth(index) {
    // if (index === 0) {
      console.log(this.head);
    //   return this.head;
    // }
    
    let current = this.head;
    let count = 1;
    while (count < index) {
      count++;
      current = current.next;
    }
    console.log(current);
    return current;
  }

  clear() {
    this.head = null;
  }

  toArray() {
    let current = this.head;
    let LinkedList2Array = [];
    let count = 0;
    while (current) {
      LinkedList2Array[count] = current.data;
      current = current.next;
      count++;
    }

    return LinkedList2Array;
  }

  search(data) {
    let current = this.head;
    // let count = 0;

    while (current) {
      if (current.data == data) {
        return current;
      }
      // count++;
      current = current.next;
    }
  }


  getKthToLast(index){
    let current = this.head
    for (let i = this.size() - index - 1; i > 0; i-- ){
         current = current.next
    }
return current
  }


  containsDuplicates() {
    let current = this.head;
    const dupCollection = {}
    while (current) {
      if(dupCollection[current.data]){
        return true
      } else {
        dupCollection[current.data] = 1
      }
      current = current.next;
      }
      
      return false;
    
  }
}

module.exports = {
  Node,
  LinkedList,
};

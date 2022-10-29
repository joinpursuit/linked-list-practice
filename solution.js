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
  //insert
    insert(data) {
      let newNode = new Node(data);
      if(!this.head) {
        this.head = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
  }
   // size
    size() {
      let count = 0;
      let node = this.head;
        while(node) {
          count++;
        node = node.next;
    }
      return count;
    }

  // delete by key
    delete(data) {
      let node = this.head;
      let counter = 0;
        while (node.data !== data && node.next) {
          counter++;
          node = node.next;
        }
        let foundNode = node;
          node = this.head;
        for (let i=1; i < counter; i++) {
          node = node.next;
        }
        node.next = foundNode.next;    
    }

 // getFirst
    getFirst(data) {
      return this.head;
    }

 //getLast
  getLast(data) {
    let node = this.head; 
    if(!this.head) {
      return null;
    }  
      while(node.next) {
      node = node.next
    }
      return node;
  }
 

// search by key and return data
    search(key) {
      let node = this.head;
        while (node !== null && node.data !== key) {
          node = node.next;
      }
        return node;
    }

// get kth element- 

  getKth(k) {
   let node = this.head;
    let count = 1;
      while (node !== null && count < k) {
        count++;
        node = node.next;
      }
      return node;
  }

// getKthtolast - get Kth from last element
  getKthToLast(k) {
    let node = this.head;
    for (let i = 1; i < (this.size() - k); i++) {
      node = node.next
    }
    return node;
  }

// isEmpty - check if list is empty
  isEmpty() {
    let node = this.head;
    if (node){
      return false;
    }
    return true;
  }

//clear the linkedList
  clear() {
    this.head = null;
  }

// toArray- convert data to an array
  toArray() {
   let node = this.head;
    let array = [];
      while (node !== null) {
        array.push(node.data)
          node = node.next;
   }
    return array;
  }

// containsDuplicates - check for duplicates and return true if contains duplicates - false if not
  containsDuplicates() {
    let node = this.head;
    let obj = {};
    while(node !== null) {
      if(!obj[node.data]) {
        obj[node.data] = 1;
        node = node.next;
      } else {
        return true;
      }
    }
    return false;
  }
};


module.exports = {
  Node,
  LinkedList,
};
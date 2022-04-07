const { nums, words } = require("./data/data.js");

 
class Node {
  constructor(data, next){
    this.data = data;
    this.next = next;
  }
};

class LinkedList{
  constructor(head = null){
    this.head = head;
  };

  insert(value){
    let nextNode = new Node(value);
    if (!this.head) {
        this.head = nextNode;
    } else {
        nextNode.next = this.head;
        this.head = nextNode;
    };
  };

  size(){
    let count = 0;
    let temp = this.head;
    while(temp){
      count++;
      temp = temp.next;
    }
    return count;
  };

  delete(key){
    if(this.head.data === key){
      this.head = this.head.next;
    }
    let nextNode = this.head;
        while (nextNode.next) {
            if (nextNode.next.data === key) {
              nextNode.next = nextNode.next.next;
          }
        nextNode = nextNode.next;
    }
  };

  getFirst(){
      return this.head;
  }

  getLast(){
    let lastNode = this.head;
    if (lastNode) {
        while (lastNode.next) {
            lastNode = lastNode.next;
        }
    }
    return lastNode;
  }

  search(key) {
    if (this.head.data === key) {
        return this.head;
    }

    let nextNode = this.head;
    while (nextNode.next) {
        if (nextNode.next.data === key) {
            return nextNode.next;
        }
        nextNode = nextNode.next;
    }
    return null;
}
  getKth(index){
    let count = 1;
    let head = this.head;
    while (head) {
        if (index === count) {
            return head;
        }
        count++;
        head = head.next;
    }
    return count;
  };

  getKthToLast(index){
    let length = this.size();
    return this.getKth(length - index);
  };

  isEmpty(){
    if(!this.head){
      return true
      } else {
      return false;
    }
  };

  clear(){
    this.head = null;
  }

  toArray() {
    let arr = [];
    let node = this.head;
    while (node) {
      arr.push(node.data);
      node = node.next;
    }
    return arr;
}

  containsDuplicates() {
    let arr = [];
    let nextNode = this.head;
      while (nextNode) {
        if (arr.includes(nextNode.data)) {
          return true;
        }
          arr.push(nextNode.data);
          nextNode = nextNode.next;
        }
        return false;
    }
}

module.exports = {
  Node,
  LinkedList,
};

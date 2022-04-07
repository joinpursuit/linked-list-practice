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
    this.length = 0;
  }


insert(data) {

  let newNode = new Node(data);
  newNode.next = this.head;
  this.head = newNode
  this.length++

}

size(){
  return this.length;
}

get(index) {

  if (index < 0 || index >= this.length) return null;

  let current = this.head;
  let count = 0;
  while (count !== index) {
    current = current.next
    count++;
  }
  return current;

}

delete(index) {

  if (index < 0 || index > this.length) return undefined;
  let prev = this.get(index-1);
  const removed = prev.next;
  prev.next = removed.next;
  this.length--;

}

getFirst() {
  return this.head;
}
getLast() {
  let current = this.head;
  
  while(current.next !== null) {
    current = current.next;
  }

  return current
}


search(key) {

  let current = this.head;
  let count = 0;
  while (current.data !== key) {
    current = current.next
    count++;
  }
  return current;
}

getKth(index) {
  let count = 0;
  let current = this.head;

  while (count !== index-1) {
    current = current.next;
    count++;
  }
  return current
}


reverse() {

  let current = this.head;
  let prev = null;

  while (current !== null) {
    let temp = current.next;
    current.next = prev;
    prev = current;
    current = temp;
  }

}

getKthToLast(index) {
  
  if (index < 0 || index >= this.length) {
    return null
  }
  let count = 0
  let current = this.head;

  //I can't start from the end but if I can use reverse on this method, I can use the for loop. I think. Or doubly Linked List.
  // for (let i = this.length; i > this.length-index; i--)  {
   while (count !== this.length-index-1) {
    console.log(index)
    count++;
    current = current.next
  }
  console.log(current)
  return current
}

isEmpty(){
  if(!this.head) {
    return true
  } else {
    return false;
  }
}

clear() {
  this.head = null;
}


toArray() {
let arr = []

let current = this.head;
while (current) {
  arr.push(current.data)
  current = current.next;
}
return arr;
}

containsDuplicates() {
 
 const convertToArray = this.toArray()
 return (new Set(convertToArray)).size !== convertToArray.length;

}


}



module.exports = {
  Node,
  LinkedList,
};

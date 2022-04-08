// const { nums, words } = require("./data/data.js");

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];

const words = [
  "the",
  "quick",
  "brown",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];

class Node {
  constructor(data,next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null){
    this.head = head;
  }
  // insert(value){
  //   let newNode = new Node(value)
  //   if(!this.head){
  //     this.head = newNode
  //   } else {
  //     newNode.next = this.head
  //     this.head = newNode
  //   }
    insert(value){
      let newNode = new Node(value)
      console.log(newNode)
      newNode.next = this.head
      console.log(newNode.next)
      this.head = newNode
      console.log(this.head)
    }
  
}

let node = new Node("lalallaalals")
let nodeTwo = new Node("blalallalalalalla")
console.log(node)
console.log(nodeTwo)

let newLi = new LinkedList(node)
console.log(newLi)
let hi = new LinkedList(node)
console.log(newLi.insert("HIIIIIII"))


// class Node {
//   constructor(data){
//     this.data = data;
//     this.next = null;
//   }
// }

// class LinkedList {
//   constructor(head = null) {
//     this.head = head;
//     this.size = 0;
//   }

//   insert(value){
//     let newNode = new Node(value);
//     newNode.next = this.head; 
//     this.head = newNode;
//   }

//   size(value){
//     let size = 0;
//     let temp = this.head;
//     while(temp){
//       size++
//       temp = temp.next;
//     }
//     return size
//   }

  // getKthToLast(k){
  //   console.log(k)
  //   // length - 11
  // }
// }

// let newLinkedList1 = new LinkedList();

// for(let num of nums){
//   // console.log(num)
//   newLinkedList1.insert(num)
// }

// let newLinkedList2 = new LinkedList();
// for(let word of words){
//   newLinkedList2.insert(word)
// }


module.exports = {
  Node,
  LinkedList,
};

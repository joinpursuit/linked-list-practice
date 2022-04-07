//const { nums, words } = require("./data/data.js");
const words = [
  "the",
  "quick",
  "brown",
  "the",
  "the",
  "fox",
  "jumps",
  "over",
  "the",
  "lazy",
  "dog",
];
const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 0];

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }
  insert(value) {
    this.head = new Node(value, this.head);
  }
  size() {
    let count = 0;
    let temp = this.head;
    while (temp) {
      count++;
      temp = temp.next;
    }
    return count;
  }
  delete(key) {
    let temp = this.head;
    let prev = null;
    while (temp) {
      if (temp.data === key) {
        if (prev === null) {
          this.head = temp.next;
        } else {
          prev.next = temp.next;
        }
        return temp.data;
      }
      prev = temp;
      temp = temp.next;
    }
    return temp.data;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    if (!this.head) {
      return null;
    }
    let temp = this.head;
    while (temp) {
      if (temp.next === null) {
        return temp;
      }
      temp = temp.next;
      if (temp.next === null) {
        return temp;
      }
    }
  }
  //"the", "quick", "brown", "fox", "jumps", "over", "the", "lazy","dog",
  search(key) {
    if (!this.head) return null;
    let temp = this.head;
    let searchedFor = null;
    while (temp) {
      if (temp.data === key) {
        console.log(`hey this is a searched-key: ${temp.data}`);
        searchedFor = temp;
      }
      temp = temp.next;
    }
    return searchedFor;
  }
  getKth(num) {
    //how do i keep track of the elements??
    //need a count
    //loop through the linkedList
    let temp = this.head;
    let count = 0;
    let kthNode = null;
    //console.log(this.head);
    while (temp) {
      count++;
      if (count === num) {
        //console.log(temp.data,"whaddup")
        kthNode = temp;
      }
      //console.log(temp)
      temp = temp.next;
    }
    return kthNode;
  }
  getKthToLast(num) {
    //console.log(this.size());
    let kthToLastNum = this.size() - num;
    let kthToLastNode = null;
    let count = 0;
    //console.log(kthToLastNum);
    let temp = this.head;
    //console.log(temp)
    while (temp) {
      count++;
      if (kthToLastNum === count) {
        //console.log(temp,"yo")
        kthToLastNode = temp;
      }
      temp = temp.next;
    }
    return kthToLastNode;
  }
  isEmpty() {
    if (this.head === null) {
      return true;
    } else {
      return false;
    }
  }
  clear() {
    //console.log(this.head);
    this.head.next = null;
    this.head = null;
  }
  //const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0];
  toArray() {
    let array = [];
    let temp = this.head;
    //console.log(temp);
    while(temp){
      array.push(temp.data);
      temp = temp.next;
    }
    return array;
  }
  containsDuplicates() {
    let temp = this.head;
    let object = {};
    while(temp){
      console.log(temp.data)
      object[temp.data] = (object[temp.data] || 0) + 1;
      temp = temp.next;
    }
    console.log(object)
    for(let key in object){
      console.log(key);
      console.log(object[key]);

      if(object[key] > 1){ 
        console.log(key, "duplicates")
        return true;
      }
    }
    return false;
  }
}

let list = new LinkedList();
let numList = new LinkedList();
// console.log(util.inspect(list, true, 10))
for (let word of words) {
  list.insert(word);
}

for (let num of nums) {
  numList.insert(num);
}
// console.log(numList.containsDuplicates());
console.log(list.containsDuplicates())
//numList.getKth(1)
// console.log(list.getLast());
//list.search("dog");
//numList.getKthToLast(3);
//numList.clear()
//numList.toArray();

module.exports = {
  Node,
  LinkedList,
};
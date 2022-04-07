//const { nums, words } = require("./data/data.js");
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
  constructor(data, next = null){
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor(head = null){
    this.head = head;
  }
  insert (value){
    this.head = new Node(value, this.head);
  }
  size (){
    let count = 0;
    let temp = this.head;
    while(temp){
      count++;
      temp = temp.next;
    }
    return count;
  }
  delete(key){
    let temp = this.head;
    let prev = null;
    while(temp){
      if(temp.data === key){
        if(prev === null){
          this.head = temp.next;
        }else{
          prev.next = temp.next;
        }
        return temp.data;
      }
      prev = temp;
      temp = temp.next;
    }
    return temp.data;
  }
  getFirst(){
    return this.head;
  }
  getLast(){
    if(!this.head) {
      return null;
    }
    let temp = this.head;
    while(temp){
      if(temp.next === null){
        return temp;
      }
      temp = temp.next;
      if(temp.next === null) {
        return temp
      }
    }
  }
  //"the", "quick", "brown", "fox", "jumps", "over", "the", "lazy","dog",
  search(key){
    if(!this.head) return null;
    let temp = this.head;
    let searchedFor = null;
    while(temp){
      if(temp.data === key){
        console.log(`hey this is a searched-key: ${temp.data}`);
        searchedFor = temp;
      }
      temp = temp.next;
    }
    return searchedFor
  }
  getKth(){

  }
  getKthToLast(){

  }
  isEmpty(){

  }
  clear(){

  }
  toArray(){

  }
  containsDuplicates(){

  }
}

let list = new LinkedList();

// console.log(util.inspect(list, true, 10))
for (let word of words) {
  list.insert(word);
}

// console.log(list.getLast());
list.search("dog");
module.exports = {
  Node,
  LinkedList,
};

    // //first create a new node to insert the value// the Node i
    // let newNode = new Node(value);
    // // console.log(util.inspect(newNode, true, 10));
    //  console.log(newNode);
    // // console.log(newNode, "head",this.head);
    // console.log(newNode.next);
    // console.log(this.head);
    // newNode.next = this.head; //
    // this.head = newNode;
    // console.log("next",this.head);

    // //this.head = new Node(data, this.head)
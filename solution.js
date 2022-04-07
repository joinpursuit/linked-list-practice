const { nums, words } = require("./data/data.js");
// import util from "util"

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

  }
  getLast(){

  }
  search(){

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

// let list = new LinkedList();
// list.insert(1);
// list.insert(2);
//list.insert(nodeTwo)
// console.log(list);
// console.log(util.inspect(list, true, 10))
//const nums1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]; 
// let numList = new LinkedList();
// for (let num of nums1) {
//   numList.insert(num);
// }
// console.log(numList)

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
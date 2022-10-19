const { nums, words } = require("./data/data.js");
class Node {

constructor(data) {
  this.data = data;
  this.next = null;
}
}
class LinkedList{
constructor(head = null){
  this.head = head;
}

insert(data){
  let newNode = new Node(data);
  if (!this.head){
    this.head = newNode;
  } else {
    newNode.next = this.head;
    this.head = newNode;
  }
  
}

size(){
  let count = 0;
  let node = this.head;
  while (node) {
    count ++;
    node = node.next;
  }
  return count;
}

delete(data){
  let node = this.head;
  let counter = 0;
  while (node.data !== data && node.next) {
    counter++;
    node = node.next
}
let foundNode = node;
node = this.head;
for(let i = 1; i < counter; i++) {
  // we stop right before the item to delete
  node = node.next
}
node.next = foundNode.next;
}

getFirst(){
  return this.head;
}

getLast(){
  let node = this.head;
  if (!this.head){
    return null;
  } while(node.next){
    node = node.next;
  }
  return node;
}

search(itemToFind){
  let node = this.head;
  while(node !== null && node.data !== itemToFind) {
    node = node.next;
}
return node;
}

clear(){
  this.head = null;
}
isEmpty(){
    return this.head == null;
}
getKth(index) {
  let node = this.head;
  let count = 1;
  while (node) {
    if (count === index) {
      return node;
    }
  }
  
}
getKthToLast (index) {
 let node = this.head;
 let count = 1;
 while (count !== this.size() - index) {
  count++;
  node = node.next;
 }
 return node;
}
toArray() {
  let arr = [];
  let node = this.head;
  while (node){
    arr.push(node.data);
    node = node.next;
  }
  return arr;
}

containsDuplicates() {
  let obj = {}
  let node = this.head
  while(node != null){
    if(!obj[node.data]){
      obj[node.data] = 1
      node = node.next
    } else {
      return true
    }
  }
  return false
}
}

  

const anotherArr = new Array(nums);
console.log(anotherArr)

const firstNode = new Node(nums);
const secondNode = new Node(nums);

firstNode.next = secondNode;

const myListOne = new LinkedList(firstNode)

console.log(firstNode);
module.exports = {
  Node,
  LinkedList,
};
const { nums, words } = require("./data/data.js");

// - Create a Node class with properties
//   - data
//   - next
class Node{
  constructor(data){
    this.data = data;
    this.next = null;
  }
}
// - Create a linked list with properties
//   - head
class LinkedList{
  constructor(head = null){
    this.head = head
  }
  // - Linked List Methods
  //   - `insert`
  insert(data){
    let newNode = new Node(data);
    if(!this.head){
      this.head = newNode;
    }else{
      newNode.next = this.head;
      this.head = newNode
    }
  }
  //   - `size`
  size(){
    let count = 0;
    let node = this.head;
    while(node){
      count++;
      node = node.next
    }
    return count
  }
  //   - `delete` by key
  delete(data){
    let node = this.head;
    let counter = 0;
    while(node.data !== data && node.next){
      counter++;
      node = node.next
    }
    let foundNode = node;
    node = this.head;
    for(let i = 1; i < counter; i++){
      node = node.next
    }
    node.next = foundNode.next
  }
  //   - `getFirst` element
  getFirst(){
    return this.head;
  }
  //   - `getLast` element
  getLast(){
    let node = this.head;
    if(!this.head) return null;
    while(node.next){
      node = node.next
    }
    return node;
  }
  //   - `search` an element by key and return data
  search(key){
    let node = this.head;
    while(node !== null && node.data !== key){
      node = node.next;
    }
    return node
  }
  //   - `clear` the linked list
  clear(){
    this.head = null;
   
  }

  //   - `isEmpty` check if list is empty
  isEmpty(){
  //  return this.head ? false : true
      return this.head === null
  }
  //   - `getKth` retrieve kth element
  getKth(k){
    let current = this.head;
    let count = 1
    while(current !== null && count < k){
      current = current.next;
      count ++
    }
    return current;
  }
  //   - `toArray`convert data from linked list to an array
  toArray(){
    let current = this.head;
    let array = []
  
    while (current !== null){
        array.push(current.data);
        current = current.next;  
    }
    return array
  }

  //   - `getKthToLast` retrieve kth from last element
  getKthToLast(k){
    let node = this.head;
    // console.log(this.size(),node, k)
  

   for(let i = 1; i < (this.size() - k); i++){
    node = node.next
    console.log(node)
   }

    return node
  }
  //   - `containsDuplicates` check for duplicates - return true if contains duplicates, false if not
  containsDuplicates(){
    let set = new Set()
    for(let i = 0; i < this.toArray().length; i++){
      set.add(this.toArray()[i])
    }
   return  this.toArray().length !== set.size 
  }
}


const numWord = new LinkedList(new Node(nums))
numWord.toArray()

module.exports = {
  Node,
  LinkedList,
};

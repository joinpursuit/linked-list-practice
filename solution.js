// const { nums, words } = require("./data/data.js");

class Node{
  constructor(data = null, next = null){
    this.data = data
    this.next = next
  }
}

class LinkedList {
  constructor(){
    this.head = null
  }

  insert(data){
    const node = new Node(data)

    if(this.head === null){
      this.head = node
    } else {
      node.next = this.head
      this.head = node
    }
  }

  size(){
    let counter = 0
    let node = this.head
    while(node !== null){
      node = node.next
      ++counter
    }

    return counter
  }

  delete(data){
    let node = this.head
    if(node.data === data){
      this.head = this.head.next
      return true
    }
    while(node !== null){
      if(node.next.data === data){
        node.next = node.next.next
        return true
      }
      node = node.next
    }
    return false
  }

  getFirst(){
    return this.head
  }

  getLast(){
    let currentNode = this.head.next
      while(currentNode.next !== null){
        currentNode = currentNode.next
      }
      return currentNode
  }

  search(data){
    let currentNode = this.head
    while(currentNode !== null){
      if(currentNode.data === data){
        return currentNode
      }
      currentNode = currentNode.next
    }
    return null
  }
  
  getKth(index){
    let currentNode = this.head
    for(let i = index-1; i > 0; i--){
      currentNode = currentNode.next
    }
    return currentNode
  }
 
  getKthToLast(number){
    let currentNode = this.head
    const index = this.size() - number
    for(let i = index-1; i > 0; i--){
      currentNode = currentNode.next
    }
    return currentNode

  }

  isEmpty(){
    if(this.head === null){
      return true
    } 
    return false
  }

  clear(){
    this.head = null
  }
  
  toArray(){
    let linkedListArr = []
    const length = this.size()
    let currentNode = this.head
    for(let i = 0; i < length; i++){
      linkedListArr.push(currentNode.data)
      currentNode = currentNode.next
    }
    return linkedListArr
  }

  containsDuplicates(){
    //have array
    const array = []
    const length = this.size()
    //a loop
    let currentNode = this.head
    for(let i = 0; i < length; i++){
      //array.includes(data) -> return true
      if(array.includes(currentNode.data)){
        return true
      }else {
        //put data in array
        array.push(currentNode.data)
        currentNode = currentNode.next
      }
    }

    // false
    return false
  }
}



// const someList = new LinkedList(10)
// someList.insert(5)

// console.log(someList.size())

module.exports = {
  Node,
  LinkedList,
};

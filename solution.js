const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  insert(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
    // console.log(newNode)
  }
  size() {
    let count = 0
    while (this.head) {
      count++
      this.head = this.head.next
    }
    return count
  }
}

const Krystal = new Node("Krystal")
const Ivan = new Node("Ivan")
Krystal.next = Ivan
console.log(Krystal)
const list = new LinkedList(Krystal)
list.insert("Erik")
console.log(list.size())


module.exports = {
  Node,
  LinkedList,
};

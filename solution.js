const { nums, words } = require("./data/data.js");
// TypeError: Cannot read property 'next' of null:
  // Error-catching with try/catch
  // Update our loop condition to terminate if current is null
  // Use fancy new JS syntax - Optional-chaining operator:   ?

class Node {
  constructor(data) {
    this.data = data
    this.next = null
    // this.prev = null
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head
  }

  insert(data) {
    let newNode = new Node(data)
    // this.head.prev = newNode
    newNode.next = this.head
    this.head = newNode
  }

  size() {
    let count = 0
    let currentNode = this.head
    while (currentNode) {
      count++
      currentNode = currentNode.next
    }
    return count
  }

  delete(idx) {
    let count = 0
    let oldNode = null
    let nextNode = null

    while (count !== idx) {
      this.head = this.head.next
      oldNode = this.head.prev
      nextNode = this.head.next
      count++
    }
    oldNode.next = nextNode
    nextNode.prev = oldNode
    // console.log('oldNode:', oldNode)
    // console.log('currentNode:', currentNode)
    // console.log('nextNode:', nextNode)
    this.head = nextNode
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let length = this.size()
    let count = 1
    let currentNode = this.head
    while (count < length) {
      currentNode = currentNode.next
      count++
    }
    return currentNode
  }

  getKth(k) {
    // let count = 0
    // while (count < k - 1) {
    //   this.head = this.head.next
    //   count++
    // }
    // return this.head
    let current = this.head
    for (let i = 0; current && i < k; i += 1) {
      current = current.next
    }
    return current
  }

  search(data) {
    let current = this.head
    while (current) {
      if (current.data === data) {
        return current
      }
      current = current.next
    }
    return null
  }

  getKthToLast(k) {
    let index = this.size() - k
    let current = this.head // 1, 2, 3, 4, 5
    let count = 1

    while (count < index) {
      console.log(current.data)
      current = current.next
      count++
    }
    return current
  }
}

const firstNode = new Node(5)
const list = new LinkedList(firstNode)
list.insert(4)
list.insert(3)
list.insert(2)
list.insert(1)

console.log(list.getKthToLast(5))
// console.log(list.getKth(1))
// console.log(list)


module.exports = {
  Node,
  LinkedList,
};

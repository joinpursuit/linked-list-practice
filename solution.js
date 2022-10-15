const { nums, words } = require('./data/data.js')

class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}

class LinkedList {
  constructor(head) {
    this.head = head
  }

  insert(data) {
    let newInsertNode = new Node(data)
    if (!this.head) {
      this.head = newInsertNode
    } else {
      newInsertNode.next = this.head
      this.head = newInsertNode
    }
  }

  size() {
    let count = 0
    let node = this.head
    while (node) {
      count++
      node = node.next
    }
    return count
  }

  delete(data) {
    let node = this.head
    let counter = 0
    while (node.data !== data && node.next) {
      counter++
      node = node.next
    }
    let foundNode = node
    node = this.head
    for (let i = 1; i < counter; i++) {
      node = node.next
    }
    node.next = foundNode.next
  }

  getFirst() {
    return this.head
  }

  getLast() {
    let node = this.head
    if (!this.head) return null
    while (node.next) {
      node = node.next
    }
    return node
  }

  search(key) {
    let node = this.head
    while (node !== null && node.data !== key) {
      node = node.next
    }
    return node
  }

  getKth(key) {
    let node = this.head
    let counter = 1
    while (counter !== key) {
      counter++
      node = node.next
    }
    return node
  }

  getKthToLast(key) {
    let index = this.size(this) - key
    return this.getKth(index)
  }

  isEmpty() {
    return !this.head
  }

  clear() {
    this.head = null
  }

  toArray() {
    let array = []
    let node = this.head
    while (node) {
      array.push(node.data)
      node = node.next
    }
    return array
  }

  containsDuplicates() {
    let array = []
    let node = this.head
    while (node) {
      array.push(node.data)
      node = node.next
    }

    const arr = [...new Set(array)]

    return arr.length !== array.length
  }
}

module.exports = {
  Node,
  LinkedList,
}

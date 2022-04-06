const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = typeof data === "number" ? data >= 0 ? data : null : data || null;
    this.next = next || null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = head || null;
  }

  insert(value) {
    let newNode = new Node(value)
    
    let node = this.head 
    
    //for numList
    if (typeof value === "number") {

      //insert at the beginning for when we're starting from scratch OR when there's already data
      if (node == null) {
          this.head = newNode
      }
      //insert in the end... 
      while(node) {
        // check for zero first to ensure proper order, then check for rest
        if ((value === 0 && node.data > value && node.next == null) || node.data < value && node.next == null) {
          let temp = node.next
          node.next = newNode
          newNode.next = temp
        } 
    
        node = node.next
      }
      return this.head
    } else {
      //for wordList

      //insert at the beginning for when we're starting from scratch OR when there's already data
      if (node == null) {
        this.head = newNode
      }

      //insert in the end... 
      while(node) {
        if (node.next == null) {
          node.next = newNode
          newNode.next = null
        }
        node = node.next
      }
      return this.head
    }

  }

  size() {
    let counter = 0;

    let currNode = this.head;

    while (currNode) {
      counter++
      currNode = currNode.next
    }

    return counter
  }

  delete(value) {
    let currNode = this.head
    if (currNode.data === value) {
      this.head = currNode.next 
    }

    while (currNode) {
      if (currNode.next) {
        if (currNode.next.data === value) {
          currNode.next = currNode.next.next
          return this.head
        } else {
          currNode = currNode.next
        }
      }
    }
  }

  getFirst() {
    let node = this.head 

    while (node) {
      if (node.next == null) {
        return node
      }
      node = node.next
    }
  }

  getLast() {
    let node = this.head 
    return node
  }

  search(value) {
    let node = this.head

    while (node) {
      if (node.data === value) {
        return node 
      }
      node = node.next
    }
  }

  getKth(value) {
    let node = this.head 
    let size = this.size()

    if (value === size) {
      return node
    }

    let i = size
    
    while (node) {
      if (node.next == null) {
        if (value === 1) {
          return node
        }
      } else {
        if (i === value) {
          return node
        }
      }
      i-- 
      node = node.next
    } 
  }

  getKthToLast(value) {
    let node = this.head
    let size = this.size()

    if (value === 0) {
      return node 
    }

    let i = size 

    while (node) {
      if (node.next == null) {
        if (value === size - 1) {
          return node
        }
      } else {
        if (size - value === i) {
          return node 
        }
      }
      i--
      node = node.next
    }
  }

  isEmpty() {
    return !this.head
  }

  clear() {
    this.head = null
  }

  toArray() {
    let node = this.head;
    let newArr = [node?.data]

    while (node) {
      if (node.next !== null) {
        newArr.unshift(node.next.data)
      }
      node = node.next
    }
    return newArr
  }

  containsDuplicates() {
    let node = this.head;
    let newArr = [node?.data]

    while (node) {
      if (node.next !== null) {
        if (newArr.includes(node.next.data)) {
          return true
        } else {
          newArr.unshift(node.next.data)
        }
      }
      node = node.next
    }
    return false
  }

}


module.exports = {
  Node,
  LinkedList,
};

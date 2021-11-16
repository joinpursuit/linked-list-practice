const { nums, words } = require("./data/data.js");


class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  /**
   * Creates a new linked list
   * 
   * @param {Node | null} head - the node that should be the head of the linked list
   */
  constructor(head = null) {
    this.head = head;
  }

  /**
   * Inserts data at the head of the list
   * 
   * @param {*} data - the data to insert
   */
  insert(data) {
    let newNode = new Node(data);
    if (!this.head) {
      this.head = newNode
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
  }

  /**
   * Finds the number of nodes in the list
   * 
   * @returns size - number of nodes in list
   */
  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++
      node = node.next
    }
    return count
  }

  /**
   * Deletes a node from the list based on it's location in the list.
   * For example, list.delete(0) should remove the head of the list.
   * 
   * @param {Number} idx - the "index" of the node to delete
   */
  delete(idx) {
    let count = 0
    let node = this.head
    //Loop as many times as the index needed
    while (idx !== count) {
      count++
      node = node.next
    }
    //Once index is found, set it equal to a variable for later use
    let foundIdx = node
    //start from the beginning
    node = this.head
    //loop one less than the number of times looped to find index node
    for (let i = 1; i < count; i++) {
      //with every iteration of the loop, go to the next node
      node = node.next
    }
    //Once you're at the node before the index node 
    //set that node's next propery to point at the index node's NEXT value not the index node
    //this essentially skips pover the index node 
    node.next = foundIdx.next
  }

  /**
   * @returns {Node} - the first node (i.e. the head) of the list
   */
  getFirst() {
    return this.head
  }

  /**
   * @returns {Node} - the final non-null node of the list
   */
  getLast() {
    let node = this.head;
    while (node.next) {
      node = node.next
    }
    return node
  }

  /**
   * Returns a node containing the provided data, or null otherwise.
   * 
   * @param {*} data - data to search for in the list
   * @returns {Node | null} - the node containing the data, or null
   */
  search(data) {
    let node = this.head;
    while (node) {
      if (node.data !== data) {
        node = node.next
      } else {
        return node
      }
    }
    return null;
  }

  /**
   * Returns a node at position k in the list. If no such node exists, return null.
   * 
   * @param {Number} k - "index" of the node to return.
   * @returns {Node | null}
   */
  getKth(k) {
    let node = this.head;
    let count = 0;
    while (node) {
      count++
      if (count !== k) {
        node = node.next
      } else {
        return node
      }
      return null;
    }

  }

  /**
   * Returns a node k spots from the end of the list. For example, list.getKthToLast(0) returns the final node.
   * 
   * @param {Number} k 
   * @returns {Node | Null}
   */
  getKthToLast(k) {
    let node = this.head;
    let count = 0
    //get the size
    //subtract k to get the index you need
    //size minus k is the index to loop to
    let indexToLoopTo = this.size() - k
    while (node !== null && count !== indexToLoopTo) {
      count++
      node = node.next
    }
    return node
  }

  /**
   * @returns {Boolean} - true if there is at least one node in the list, and false otherwise
   */
  isEmpty() {
    if (this.size() === 0) {
      return true
    } else {
      return false
    }

    //This solution also works
    // if (this.head === null) {
    //   return true
    // } else {
    //   return false
    // }
  }

  clear() {
    this.head = null
  }

  /**
   * @returns {Array} - an array where the 0th element is the data at the head of the list, etc
   */
  toArray() {
    let arr = [];
    this.delete(1)
    let node = this.head;
    while (node) {
      arr.push(node.data)
      node = node.next
    }
    arr.push(1)
    return arr
  }

  /**
   * @returns {Boolean} - true if multiple nodes contain the same data
   */
  containsDuplicates() {
    let node = this.head;
    let obj = {}
    while (node) {
      if (obj[node.data] !== undefined) {
        return true
      } else {
        obj[node.data] = 1
      }
      node = node.next
    }
    return false
  }
}



















// class LinkedList {
//   constructor(head = null) {
//     this.head = head
//   }
//   /**
//    * Inserts data at the head of the list
//    *
//    * @param {*} data - the data to insert
//    */
//   insert(data) {
//     const newNode = new Node(data)
//     newNode.next = this.head
//     this.head = newNode
//   }

//   /**
//    * Finds the number of nodes in the list
//    * 
//    * @returns size - number of nodes in list
//    */
//   size() {
//     let currentNode = this.head
//     let count = 0
//     while (currentNode) {
//       count += 1
//       currentNode = currentNode.next
//     }
//     return count
//   }

//   /**
//    * Deletes a node from the list based on it's location in the list.
//    * For example, list.delete(0) should remove the head of the list.
//    * 
//    * @param {Number} idx - the "index" of the node to delete
//    */
//   delete(idx) {
//     // create a count and a currentNode variable
//     let count = 0
//     let currentNode = this.head
//     let prevNode = null
//     //iterate with a while loop, grap previous node with count + 1 = idx
//     while (currentNode) {
//       if (count + 1 === idx) {
//         prevNode = currentNode
//       } if (count === idx) {
//         prevNode.next = currentNode.next
//       }
//       currentNode = currentNode.next
//       count += 1
//     }
//     //Also grab next Node when count is equal to indx
//     //assign prevnode.next to nextnode
//   }

//   /**
//    * @returns {Node} - the first node (i.e. the head) of the list
//    */
//   getFirst() {
//     return this.head
//   }

//   /**
//    * @returns {Node} - the final non-null node of the list
//    */
//   getLast() {
//     let currentNode = this.head
//     while (currentNode) {
//       if (currentNode.next === null) {
//         return currentNode
//       }
//       currentNode = currentNode.next
//     }
//     return currentNode
//   }

//   /**
//    * Returns a node containing the provided data, or null otherwise.
//    * 
//    * @param {*} data - data to search for in the list
//    * @returns {Node | null} - the node containing the data, or null
//    */
//   search(data) {
//     let currentNode = this.head
//     while (currentNode) {
//       if (currentNode.data === data) {
//         return currentNode
//       }
//       currentNode = currentNode.next
//     }
//     return null
//   }

//   /**
//    * Returns a node at position k in the list. If no such node exists, return null.
//    * 
//    * @param {Number} k - "index" of the node to return.
//    * @returns {Node | null}
//    */
//   getKth(k) {
//     let currentNode = this.head
//     let count = 1
//     while (currentNode) {
//       if (count === k) {
//         return currentNode
//       }
//       count += 1
//       currentNode = currentNode.next
//     }
//     return null
//   }

//   /**
//    * Returns a node k spots from the end of the list. For example, list.getKthToLast(0) returns the final node.
//    * 
//    * @param {Number} k 
//    * @returns {Node | Null}
//    */
//   getKthToLast(k) {

//   }

//   /**
//    * @returns {Boolean} - true if there is at least one node in the list, and false otherwise
//    */
//   isEmpty() {
//     if (this.head === null) {
//       return true
//     } else {
//       return false
//     }
//   }

//   clear() {
//     this.head = null
//   }
//   /**
//    * @returns {Array} - an array where the 0th element is the data at the head of the list, etc
//    */
//   toArray() {
//     let arr = []
//     let currentNode = this.head
//     console.log(currentNode.data)
//     while (currentNode) {
//       arr.push(currentNode.data)
//       // console.log(arr)
//       currentNode = currentNode.next
//     }
//     console.log(arr)
//     return arr
//   }

//   /**
//    * @returns {Boolean} - true if multiple nodes contain the same data
//    */
//   containsDuplicates() {
//     let currentNode = this.head
//     let object = {}
//     while (currentNode) {
//       if (object[currentNode.data] === undefined) {
//         object[currentNode.data] = false
//       } else {
//         return true
//       }
//       currentNode = currentNode.next
//     }
//     return false
//   }
// }

module.exports = {
  Node,
  LinkedList,
};



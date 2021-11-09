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
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  /**
   * Finds the number of nodes in the list
   * 
   * @returns size - number of nodes in list
   */
  size() {
    let count = 0;
    let currentNode = this.head;
    while (currentNode) {
      count++;
      currentNode = currentNode.next;
    }
    return count;
  }

  /**
   * Deletes a node from the list based on it's location in the list.
   * For example, list.delete(0) should remove the head of the list.
   * 
   * @param {Number} idx - the "index" of the node to delete
   */
  /*
  delete(idx) {
    let count = 1;
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode) {
      if (count + 1 === idx) {
        prevNode = currentNode;
      }
      if (count === idx) {
        if (!prevNode) {
          this.head = currentNode.next;
        } else {
          prevNode.next = currentNode.next;
        }
        return;
      }
      count++;
      currentNode = currentNode.next;
    }
  }
  */

  // Deletes a node from the list based on its value.
  delete(value) {
    let currentNode = this.head;
    let prevNode = null;
    while (currentNode) {
      if (currentNode.data === value) {
        if (!prevNode) {
          this.head = currentNode.next;
        } else {
          prevNode.next = currentNode.next;
        }
        return;
      }
      prevNode = currentNode;
      currentNode = currentNode.next;
    }
  }

  /**
   * @returns {Node} - the first node (i.e. the head) of the list
   */
  getFirst() {
    return this.head;
  }

  /**
   * @returns {Node} - the final non-null node of the list
   */
  getLast() {
    let currentNode = this.head;
    while (currentNode) {
      if (!currentNode.next)
        return currentNode;

      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /**
   * Returns a node containing the provided data, or null otherwise.
   * 
   * @param {*} data - data to search for in the list
   * @returns {Node | null} - the node containing the data, or null
   */
  search(data) {
    let currentNode = this.head;
    while (currentNode) {
      if (currentNode.data === data)
        return currentNode;

      currentNode = currentNode.next;
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
    let currentNode = this.head;
    let count = 1; // 1 indexing?
    while (currentNode) {
      if (count === k)
        return currentNode;

      count++;
      currentNode = currentNode.next;
    }
    return null;
  }

  /**
   * Returns a node k spots from the end of the list. For example, list.getKthToLast(0) returns the final node.
   * 
   * @param {Number} k 
   * @returns {Node | Null}
   */
  getKthToLast(k) {
    let idx = this.size() - 1;
    let currentNode = this.head;
    while (currentNode && idx >= k) {
      if (idx === k)
        return currentNode;

      idx--;
      currentNode = currentNode.next;
    }
    return null;
  }

  /**
   * @returns {Boolean} - true if there is at least one node in the list, and false otherwise
   */
  isEmpty() {
    return this.head ? false : true;
  }

  clear() {
    this.head = null;
  }

  /**
   * @returns {Array} - an array where the 0th element is the data at the head of the list, etc
   */
  toArray() {
    let currentNode = this.head;
    const arr = [];
    while (currentNode) {
      arr.push(currentNode.data);
      currentNode = currentNode.next;
    }
    return arr;
  }

  /**
   * @returns {Boolean} - true if multiple nodes contain the same data
   */
  containsDuplicates() {
    let currentNode = this.head;
    const dictionary = {};
    while (currentNode) {
      if (dictionary[currentNode.data])
        return true;

      dictionary[currentNode.data] = true;
      currentNode = currentNode.next;
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};

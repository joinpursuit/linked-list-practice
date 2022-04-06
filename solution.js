const { nums, words } = require('./data/data.js');

class Node {
  constructor(data = null, next = null) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor(head) {
    this.head = head || null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      this.head.next = temp;
    }
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current != null) {
      count++;
      current = current.next;
    }
    return count;
  }

  delete(target) {
    let current = this.head;

    while (current !== null) {
      if (current.next.data === target) {
        const deleted = current.next;
        current.next = current.next.next;
        return deleted;
      }
      current = current.next;
    }
    return 'Not Found';
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    while (current != null) {
      if (current.next === null) {
        return current;
      }
      current = current.next;
    }
    return current;
  }

  search(target) {
    let current = this.head;
    while (current != null) {
      if (current.data === target) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  getKth(num) {
    let current = this.head;
    let count = 0;
    while (current !== null) {
      count++;
      if (num === count) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  getKthToLast(num) {
    let current = this.head;
    let count = this.size();
    while (current !== null) {
      count--;
      if (num === count) {
        return current;
      }
      current = current.next;
    }
    return null;
  }

  toArray() {
    let resArr = [];
    let current = this.head;
    while (current != null) {
      resArr.push(current.data);
      current = current.next;
    }
    return resArr;
  }

  isEmpty() {
    return this.head === null;
  }

  clear() {
    this.head = null;
  }

  containsDuplicates() {
    let current = this.head;
    const tally = {};
    while (current !== null) {
      if (tally[current.data] !== undefined) {
        return true;
      } else {
        tally[current.data] = 1;
      }
      current = current.next;
    }
    return false;
  }
}

module.exports = {
  Node,
  LinkedList,
};

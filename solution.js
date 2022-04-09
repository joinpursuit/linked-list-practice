const { nums, words } = require('./data/data.js');

class Node {
  constructor(data, prev = null, next = null) {
    this.data = data;
    this.prev = prev;
    this.next = next;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  insert(data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      let temp = this.head;
      this.head = newNode;
      temp.prev = this.head;
      this.head.next = temp;
    }
  }

  size() {
    let count = 0;
    let current = this.head;
    while (current !== null) {
      count++;
      current = current.next;
    }
    return count;
  }

  delete(target) {
    let current = this.head;

    while (current !== null) {
      if (current.data === target) {
        const deleted = current;
        if (deleted === this.head) {
          this.head = current.next;
          this.head.prev = null;
          current.next.prev = current.prev;
        } else if (deleted === this.tail) {
          this.tail = current.prev;
          this.tail.next = null;
          current.prev.next = current.next;
        } else {
          current.prev.next = current.next;
          current.next.prev = current.prev;
        }
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
    return this.tail;
  }

  search(target) {
    let current = this.head;
    while (current !== null) {
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
    let current = this.tail;
    let count = 0;
    while (current !== null) {
      if (num === count) {
        return current;
      }
      count++;
      current = current.prev;
    }
    return null;
  }

  toArray() {
    let resArr = [];
    let current = this.head;
    while (current !== null) {
      resArr.push(current.data);
      current = current.next;
    }
    return resArr;
  }

  isEmpty() {
    return this.head ? false : true;
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

const exampleList = new LinkedList();
for (let num of nums) {
  exampleList.insert(num);
}

//small test
module.exports = {
  Node,
  LinkedList,
};

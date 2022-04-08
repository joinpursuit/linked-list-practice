const { nums, words } = require("./data/data.js");

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  constructor(head = null) {
    this.head = head;
  }

  insert(data) {
    const newNode = new Node(data);
    newNode.next = this.head;
    this.head = newNode;
  }

  size() {
    let count = 0;
    let current = this.head;

    while (current) {
      count += 1;
      current = current.next;
    }

    return count;
  }

  delete(idx) {
    let current = this.head;

    if (idx === 0) {
      this.head = this.head.next;
    } else {
      let count = 0;

      while (count < idx) {
        if (count + 1 === idx) {
          if (current.next.next === null) {
            current.next = null;
          } else {
            current.next = current.next.next;
          }
          count++;
        } else {
          current = current.next;
          count++;
        }
      }
    }
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    let last = this.head;

    while (current) {
      if (current.next) {
        last = current.next;
      }
      current = current.next;
    }
    return last;
  }

  search(data) {
    let current = this.head;
    let datas = null;

    while (datas === null) {
      if (current.data === data) {
        datas = current;
      } else {
        current = current.next;
      }
    }

    return datas;
  }

  getKth(k) {
    let current = this.head;
    let count = 1;

    while (count < k) {
      current = current.next;
      count++;
    }

    return current;
  }

  getKthToLast(k) {
    let current = this.head;
    let looping = this.size() - k;
    let count = 1;

    while (count <= looping) {
      current = current.next;
      count++;
    }

    return current;
  }

  isEmpty() {
    return !this.head ? true : false;
  }

  toArray() {
    let arr = [];
    let curr = this.head;

    while (curr) {
      arr.push(curr.data);
      curr = curr.next;
    }

    return arr;
  }

  clear() {
    return (this.head = null);
  }

  containsDuplicates() {
    let curr = this.head;
    let obj = {};

    while (curr) {
      obj[curr.data] = obj[curr.data] ? obj[curr.data] + 1 : 1;
      curr = curr.next;
    }

    return Object.values(obj).some((num) => num > 1);
  }
}

module.exports = {
  Node,
  LinkedList,
};

const { nums, words } = require('./data/data.js');
class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  insert(value) {
    let nodeToInsert = new Node(value);

    if (!this.head) {
      this.head = nodeToInsert;
      return;
    } else {
      nodeToInsert.next = this.head;
      this.head = nodeToInsert;
    }
  }

  size() {
    let count = 0;
    let node = this.head;
    while (node) {
      count++;
      node = node.next;
    }
    return count;
  }
  delete(data) {
    let node = this.head;
    let counter = 0;
    while (node.data !== data && node.next) {
      counter++;
      node = node.next;
    }
    let selectNode = node;
    node = this.head;
    for (let i = 1; i < counter; i++) {
      node = node.next;
    }

    node.next = selectNode.next;
  }
  getFirst() {
    return this.head;
  }
  getLast() {
    let node = this.head;
    if (!this.head) {
      return null;
    }
    while (node.next) {
      node = node.next;
    }
    return node;
  }
  search(key) {
    let node = this.head;
    while (node !== null && node.data !== key) {
      node = node.next;
    }
    return node;
  }
  getKth(val) {
    let current = this.head;
    let count = 1;
    while (current <= val) {
      count++;
      current = current.next;
    }
    return current;
  }
  getKthToLast(val) {
    let size = this.size() - val;
    //console.log(size);
    //console.log(this.getKth(size));
    return this.getKth(size);
  }
  isEmpty() {
    if (!this.head) {
      return true;
    } else {
      return false;
    }
  }
  clear() {
    this.head = null;
  }
  toArray() {
    let array = [];
    let data = this.head;
    while (data) {
      array.push(data.data);
      data = data.next;
    }

    return array;
  }
  containsDuplicates(head) {
    let hasDupes = false;
    let dupe = {};
    let selectNode = this.head;
    while (selectNode != null) {
      if (dupe[selectNode.data]) {
        hasDupes = true;
        return hasDupes;
      } else {
        dupe[selectNode.data] = 1;
        selectNode = selectNode.next;
      }
    }

    return hasDupes;
  }
}

module.exports = {
  Node,
  LinkedList,
};

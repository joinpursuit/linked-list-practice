const { nums, words } = require("./data/data.js");

class Node {
  constructor(data, next) {
    this.data = data;
    this.next = next;
  }
}
class LinkedList {
  constructor(head) {
    this.head = head;
  }
}

module.exports = {
  Node,
  LinkedList,
};

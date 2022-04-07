const { nums, words } = require("./data/data.js");
class Node {
  constructor(data, next){
    this.data = data;
    this.next = next || null;
  }
}

class LinkedList {
  constructor(head){
    this.head = head;
  }

  insert(data){
    let newData = new Node(data);

  }

}

//let node1 = new Node(1);
//let node2 = new Node(2);
let list = new LinkedList();
console.log(list)

module.exports = {
  Node,
  LinkedList,
};

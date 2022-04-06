const { nums, words } = require("./data/data.js");
class Node {
  constructor(data, next) {
    this.data = data ? data : data === 0 ? data : null;
    this.next = next ? next : null;
  }
}

class LinkedList {
  constructor(head) {
    this.head = new Node(head);
  }

  insert(value) {
    let newNode = new Node(value);
    let current = this.head;
    if (current.data === null) {
      // for no data case
      this.head.data = value;
      return this.head;
    }
    // tests don't need items ordered, just put in front
    newNode.next = current;
    this.head = newNode;
    return this.head;
    // if (current.data > value) {
    //   // if less than first item
    //   newNode.next = current;
    //   this.head = newNode;
    //   return this.head;
    // }
    // while (current) {
    //   if (current.next === null || current.next.data > value) {
    //     // either last item of list or smaller than next node data
    //     let temp = current.next;
    //     current.next = newNode;
    //     newNode.next = temp;
    //   }
    //   current = current.next;
    // }
    // return this.head;
  }

  size() {
    let counter = 0;
    let current = this.head;
    while (current) {
      //count until null
      counter++;
      current = current.next;
    }
    return counter;
  }

  delete(key) {
    let current = this.head;
    let previous = null;
    if (current.data === key) {
      //first item case
      this.head = this.head.next;
      return;
    }
    while (current != null && current.data != key) {
      //iterate until key found
      previous = current;
      current = current.next;
    }
    if (current === null) {
      return "node not found";
    }
    // reassign nodes and skip over deleted node
    previous.next = current.next;
    return this.head;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    while (current.next != null) {
      current = current.next;
    }
    return current;
  }

  search(key) {
    let current = this.head;
    while (current != null && current.data != key) {
      //iterate until key found
      current = current.next;
    }
    if (current === null) {
      return "node not found";
    }
    return current;
  }

  getKth(k) {
    let current = this.head;
    let counter = 1;
    while (current != null && counter != k) {
      current = current.next;
      counter++;
    }
    if (current === null) {
      return "node not found";
    }
    return current;
  }

  getKthToLast(k) {
    let current = this.head;
    let counter = 1;
    while (current != null && counter != this.size() - k) {
      current = current.next;
      counter++;
    }
    if (current === null) {
      return "node not found";
    }
    return current;
  }
  isEmpty() {
    return this.head.data === null ? true : false;
  }

  clear() {
    this.head = null;
    return this.head;
  }

  toArray() {
    let current = this.head;
    let array = [];
    while (current) {
      array.push(current.data);
      current = current.next;
    }
    return array;
  }

  containsDuplicates() {
    let counter = {};
    let current = this.head;
    while (current) {
      //more than one: just end loop with a return
      counter[current.data] = counter[current.data] ? 2 : 1;
      if (counter[current.data] > 1) {
        return true;
      }
      current = current.next;
    }
    return false;
  }
}
// let node1 = new Node(1, new Node(2));
// console.log(nums);

// let list = new LinkedList(nums[0]);
// console.log(list);
// for (let i = 1; i < nums.length; i++) {
//   list.insert(nums[i]);
//   // console.log(list.head);
// }
// console.log(list);
// console.log(list.size());
// list.insert(15);
// console.log(list.size());
// list.delete(0);
// console.log(list.size());
// console.log(list);
// // list.insert(2);

// let numList = new LinkedList();
// for (let num of nums) {
//   numList.insert(num);
// }
// console.log(numList.head);
// console.log(numList.toArray());

module.exports = {
  Node,
  LinkedList,
};

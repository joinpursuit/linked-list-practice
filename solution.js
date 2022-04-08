const util = require("util");
const { nums, words } = require("./data/data.js");

/* Create a Node class with properties: data, next */
class Node {
  constructor(data){
    this.data = data;
    this.next = null;
  }
}

/* Create a linked list with properties: head */
class LinkedList {
  constructor(head = null){
    this.head = head;
  }

  // This insert will insert at the head.
  // insert from the beginning - if head is null, set null to the `newNode`. Else add a new node to beginning.
 /* Refactored this: */
  // insert(data){
  //   let newNode = new Node(data);
  //   if (this.head === null){
  //     this.head = newNode; 
  //   } else {
  //     newNode.next = this.head;
  //     this.head = newNode;
  //   }
  // }
  insert(data){
    let newNode = new Node(data);
    if (this.head !== null){
      newNode.next = this.head;
    }
    this.head = newNode;
  }
  
  // finding the number of nodes in the LinkedList. Use an accumulator - start at zero
  size(){
    let count = 0;
    let node = this.head;
    while (node){
      count++;
      node = node.next;
    }
    return count;
  }

  // Let's delete a node with a specific key.
  delete(data){
    let count = 0;
    let node = this.head;
    // while the current node.data is not equal to the passed in data; and a next node exists (true) 
    while (node.data !== data && node.next){
      count++;
      node = node.next;
    }
    let foundNode = node;
    node = this.head;
    // count is at zero. iterate over the count, starting at 1. Why are we looping over the count?
    for (let i = 1; i < count; i++){
      node = node.next;
    }
    node.next = foundNode.next;
  }

  // get the first node
  getFirst(){
    let node = this.head;
    return node;
  }

  // This will get the last node of our linked list.
  getLast(){
    let node = this.head;
    while (node){
      node = node.next;
      // if the next node is pointing to null, return the last node.
      if (node.next === null){
        return node;
      }
    }
  }

  // `search` an element by key and return data
  // This will allow us to search for a matching piece of data.
  search(data){
    let node = this.head;
    while (node.data !== data && node.next){
      node = node.next;
    }
    return node;
  }

  // `getKth` retrieve kth element
  /*
    1. set node to be the head.
    2. Make a counter that starts at 1
    3. While there is a node
    4. If the `count` is equal to the `kth` number we're looking for, return it immediately.
    5. If `count` isn't equal to the `kth` number, increase count,
    6. Move the pointer of `node` to `node.next`
  
  */
  getKth(kth){
    // console.log("head:", util.inspect(this.head, true, 11, true))
    let node = this.head;
    let count = 1;
    while (node){
      // console.log("kth:", kth)
      if (count === kth){
        return node;
      }
      count++;
      node = node.next;
    }
  }

  // `getKthToLast` retrieve kth from last element
  /*
    Order it's being added into the linked list:
    // 0 10 9 8 7 6 5 4 3 2 1
    expect(numList.getKthToLast(1).data).toEqual(2);
    getKthToLast(1) should equal 2.
    getKthToLast(0) should equal 1.
    getKthToLast(3) should equal 4.
    We're looking for how many kth's away from the end the number is.
  
    Another way to do it:
    Can subtract using the length, to get the kth to last element.
    (length - 1) - k
    ^^ this works, if the numbers are zero indexed. But linked lists aren't arrays.
  */
 /*
  use the logic of size() to see how far away it is.
  how many do we count until we get to that node, to return the value.
 */
// nodeNum is the number of nodes from the left to get to it.
// if k = 1, length = 11, nodeNum = 10
// if k = 5, length = 11, nodeNum = 6
// if k = 8, length = 11, nodeNum = 3
/* we can invoke our `.length() / .size()` method, and subtract `k` */
  // length - 11
  //    // 0 10 9 8 7 6 5 4 3 2 1
  getKthToLast(k){ // 1
    let nodeNum = this.size() - k;
    // console.log(nodeNum);

    let temp = this.head;
    let count = 1;

    // while temp has a value, and while count is not equal to the number we're looking for (`nodeNum`)
    // if count becomes `nodeNum`, we want to stop counting.
    // we start at 1, then keep incrementing count every time it goes through, until we hit nodeNum.
    while (temp){
      // if we found `nodeNum`, then return the data of the node at that position.
      if (count === nodeNum){
        // console.log(temp)
        return temp;
      }
      count++;
      temp = temp.next;
    }
  }

  /* 
  Step 1: Find out how many nodes in
  Step 2: Find the kth
  */

  // `isEmpty` check if list is empty
  isEmpty(){
    let node = this.head;
    if (node === null){
      return true;
    }
    return false;
  }

  // This will clear our linked list of all the nodes.
  // moving the pointer of this.head to "nothing"/null
  clear(){
    this.head = null;
  }

  // `toArray` convert data from linked list to an array
  toArray(data){
    let node = this.head;
    // console.log("util:", util.inspect(node, true, 11, true))
    let newArr = [];

    while (node.next !== null){
      newArr.push(node.data)
      node = node.next;
    }
    newArr.push(node.data);
    return newArr;
  }

  // `containsDuplicates` check for duplicates - return true if contains duplicates, false if not
  /*
    Input: None. We have `this.head`
    Output: Boolean. true/false
    Use this as an object.
    LinkedList: 10 9 1 7 5 3 2 1

    -------- Option #1 ---------
    // Create an empty object
    // Traverse the LinkedList (while loop, temp property, all that jazz)
    //  does it exist in the object?
            // yes: return true (immediately - it has a duplicate!)
            else
            // no: store in the object

    can store the number as a key
    // if it finds 1, 1 means how many times it shows up.
    {
      10: 1,
      9: 1,
      1: 1,
      7: 1,
      ** as soon as it finds one that already exists, it's a duplicate. For example:
      1: already exists!
    }

    -------- Option #2 ---------
    This might not be the best way of doing it:
    // Use a Set (more advanced, common way of doing this)
    // Compare lengths of nodes.
    // If the lengths are different, then it's a duplicate...
  */
  containsDuplicates(){
    let node = this.head;
    let obj = {};
    while (node){
      // does it exist in the object?
      if (node.data in obj){
        // If it already exists in the object, just set the value to `2` so it shows there is more than one.
        obj[node.data] = 2;
      } else {
        // add individual `node.data` word to empty object as key, with value of 1.
        obj[node.data] = 1;
      }
      node = node.next;
    }            
    // After the while loop has completed, check if any of the values in the `obj` are greater than 1.
    // If they are, there are duplicates. Return true. Else, return false.
    // console.log("finalObj:", obj)
    return Object.values(obj).includes(2); // boolean
  }
}

// Testing `getKthToLast` method:
// let newList = new LinkedList();
// newList.insert(1);
// newList.insert(2);
// newList.insert(3);
// newList.insert(4);
// newList.insert(5); // 5 4 3 2 1
// console.log(newList.getKthToLast(1))



// Testing `insert` method:
// let newList = new LinkedList();
// newList.insert(111);
// console.log(newList)

module.exports = {
  Node,
  LinkedList,
};

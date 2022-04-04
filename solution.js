const { nums, words } = require("./data/data.js");

class Node {
    constructor(data, next) {
        this.data = data === undefined ? 0 : data;
        this.next = next === undefined ? null : next;
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    // insert to back
    // insert(item) {
    //     let newNode = new Node(item);

    //     if (this.head) {
    //         if (this.head.next) {
    //             let last = this.getLast();
    //             last.next = newNode;
    //         } else {
    //             this.head.next = newNode;
    //         }
    //     } else {
    //         this.head = newNode;
    //     }
    // }

    // insert to front
    insert(item) {
        let newNode = new Node(item);
        if (!this.head) {
            this.head = newNode;
        } else {
            newNode.next = this.head;
            this.head = newNode;
        }
    }

    // size
    size() {
        let count = 0;
        let node = this.head;
        while (node) {
            count++;
            node = node.next;
        }
        return count;
    }

    // delete by key
    delete(key) {
        if (this.head.data === key) {
            this.head = this.head.next;
        }

        let nextNode = this.head;
        while (nextNode.next) {
            if (nextNode.next.data === key) {
                nextNode.next = nextNode.next.next;
            }
            nextNode = nextNode.next;
        }
    }

    // getFirst element
    getFirst() {
        return this.head;
    }

    // getLast element
    getLast() {
        let lastNode = this.head;
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next;
            }
        }
        return lastNode;
    }

    // search an element by key and return data
    search(key) {
        if (this.head.data === key) {
            return this.head;
        }

        let nextNode = this.head;
        while (nextNode.next) {
            console.log(nextNode.next.data);
            if (nextNode.next.data === key) {
                return nextNode.next;
            }
            nextNode = nextNode.next;
        }
        return null;
    }

    // getKth retrieve kth element
    getKth(index) {
        let count = 1;
        let node = this.head;
        while (node) {
            if (index === count) {
                return node;
            }
            count++;
            node = node.next;
        }
        return count;
    }

    // getKthToLast retrieve kth from last element
    getKthToLast(index) {
        let length = this.size();
        return this.getKth(length - index);
    }

    // isEmpty check if list is empty
    isEmpty() {
        return this.head ? false : true;
    }

    // clear the linked list
    clear() {
        this.head = null;
    }

    // toArrayconvert data from linked list to an array
    toArray() {
        let array = [];
        let nextNode = this.head;
        while (nextNode.next) {
            array.push(nextNode.data);
            nextNode = nextNode.next;
        }
        array.push(nextNode.data);
        return array;
    }

    // containsDuplicates check for duplicates - return true if contains duplicates, false if not
    containsDuplicates() {
        let array = [];
        let nextNode = this.head;
        while (nextNode) {
            if (array.includes(nextNode.data)) {
                return true;
            }
            array.push(nextNode.data);
            nextNode = nextNode.next;
        }
        return false;
    }
}

// let node1 = new Node(2);
// let node2 = new Node(5);

// node1.next = node2;

// let list = new LinkedList(node1);

// console.log(list.head.next.data);
// console.log(list.size());

wordList = new LinkedList();
for (let word of words) {
    wordList.insert(word);
}
numList = new LinkedList();
for (let num of nums) {
    numList.insert(num);
}

console.log(numList.toArray());

module.exports = {
    Node,
    LinkedList,
};

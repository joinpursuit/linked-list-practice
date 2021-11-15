const { nums, words } = require('./data/data.js');

class Node {
	constructor(data) {
		this.data = data;
		this.next = null;
	}
}
// let newNode = new Node();

class LinkedList {
	constructor() {
		this.head = null;
		this.length = 0;
	}
	insert(data) {
		const newNode = new Node(data);
		newNode.next = this.head;
		this.head = newNode;
	}

	size() {
		let count = 0;
		let newNode = this.head;
		while (newNode) {
			count++;
			newNode = newNode.next;
		}
		return count;
	}

	delete(idx) {
		let curr = this.head;
		let prev = null;
		if (curr !== null && curr.data === idx) {
			head = curr.next;
			return;
		}
		while (curr !== null && curr.data !== idx) {
			prev = curr;
			curr = curr.next;
		}
		if (curr.data === idx) {
			prev.next = curr.next;
		}
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		let curr = this.head;
		while (curr.next) {
			curr = curr.next;
		}
		return curr;
	}

	search(data) {
		let curr = this.head;
		while (curr.next !== null) {
			if (curr.data === data) {
				return curr;
			}
			curr = curr.next;
		}
		return null;
	}

	getKth(k) {
		let curr = this.head;
		for (let i = 1; i <= this.length - k; i++) {
			curr = curr.next;
		}
		return curr;
	}

	// getKthToLast(k) {
	// 	let curr = this.head;
	// 	for (let i = 1; i <= this.length - k; i++) {
	// 		curr = curr.next;
	// 	}
	// 	return curr;
	// }

  isEmpty() {
    return this.head === null
  }

  clear() {
    return this.head = null
  }

  toArray(useNodes = false) {
    const nodes = []
    let curr = this.head
    while (curr) {
      nodes.push(useNodes ? curr : curr.data)
      curr = curr.next
    }
    return nodes
  }
}

module.exports = {
	Node,
	LinkedList,
};

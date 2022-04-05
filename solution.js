const { SearchSource } = require("jest");
const { nums, words } = require("./data/data.js");

class Node {
	constructor(data, next) {
		this.data = data;
		this.next = null;
	}
}

class LinkedList {
	constructor(head = null) {
		this.head = head;
	}

	insert(data) {
		let newNode = new Node(data);
		if (!this.head) {
			this.head = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
	}

	size() {
		let current = this.head;
		let count = 0;
		while (current) {
			count++;
			current = current.next;
		}
		return count;
	}

	delete(data) {
		let node = this.head;
		let counter = 0;
		// while the data is not === to data and the node.next === truthy value
		while (node.data !== data && node.next) {
			// increment the counter
			counter++;
			// node is going to next every iteration
			node = node.next;
		}
		// save the node to the foundNode
		let foundNode = node;
		// then change the node back to the previous head
		node = this.head;
		for (let i = 1; i < counter; i++) {
			node = node.next;
		}
		// at this point node is the node to delete 1 back .
		// so it is skipping the node that has been found because it has foundNode.next
		node.next = foundNode.next;
	}

	getFirst() {
		let current = this.head;
		return current;
	}

	getLast() {
		let current = this.head;
		while (current) {
			if (current.next === null) {
				return current;
			}
			current = current.next;
		}
	}

	search(key) {
		let current = this.head;
		while (current) {
			if (current.data === key) {
				return current;
			}
			current = current.next;
		}
	}

	getKth(k) {
		let current = this.head;
		for (let i = 1; i < this.size(); i++) {
			if (k === i) {
				return current;
			}
		}
	}

	getKthToLast(k) {
		let current = this.head;
		for (let i = 2; i <= this.size() - k; i++) {
			current = current.next;
		}
		return current;
	}

	isEmpty() {
		let current = this.head;
		return !current ? true : false;
	}

	clear() {
		this.head = null;
	}

	toArray() {
		let arr = [],
			current = this.head;
		while (current) {
			arr.push(current.data);
			current = current.next;
		}
		return arr;
	}

	containsDuplicates() {
		let current = this.head,
			obj = {};
		while (current) {
			// it is checking if the obj exist if it do it returns true ..
			if (obj[current.data]) {
				return true;
			}
			// it is adding the obj
			obj[current.data] = current.data;
			current = current.next;
		}
		return false;
	}
}

module.exports = {
	Node,
	LinkedList,
};

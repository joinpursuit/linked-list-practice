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
		while (node.data !== data && node.next) {
			counter++;
			node = node.next;
		}
		let foundNode = node;

		node = this.head;
		for (let i = 1; i < counter; i++) {
			node = node.next;
		}
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
		let find = this.size() - k;
		let count = 1;
		while (current) {
			if (count === find) {
				return current;
			}
			count++;
			current = current.next;
		}
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
			if (obj[current.data]) {
				return true;
			}
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

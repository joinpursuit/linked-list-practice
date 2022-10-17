const { nums, words } = require('./data/data.js');

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
		let insertNewNode = new Node(data);
		if (this.head !== null) {
			insertNewNode.next = this.head;
		}
		this.head = insertNewNode;
	}

	size() {
		let theCount = 0;
		let node = this.head;
		// could probably try a for loop too?
		while (node) {
			theCount++;
			node = node.next;
		}
		return theCount;
	}

	delete(data) {
		let theCount = 0;
		let node = this.head;
		while (node.data !== data && node.next) {
			theCount++;
			node = node.next;
		}
		let findNode = node;
		node = this.head;
		for (let i = 1; i < theCount; i++) {
			node = node.next;
		}
		node.next = findNode.next;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		let node = this.head;
		while (node.next) {
			node = node.next;
		}
		return node;
	}

	search(data) {
		let node = this.head;
		while (node.data !== data) {
			node = node.next;
		}
		return node;
	}

	getKth(val) {
		let node = this.head;
		let theCount = 1;
		while (node) {
			if (theCount === val) return node;
		}
		theCount++;
		node = node.next;
	}

	getKthToLast(kth) {
		let theCount = 1;
		let nodeNumber = this.size() - kth;
		let node = this.head;
		while (node) {
			if (theCount === nodeNumber) return node;
			theCount++;
			node = node.next;
		}
	}

	isEmpty() {
		return this.head ? false : true;
	}

	clear() {
		this.head = null;
	}

	toArray() {
		let node = this.head;
		let arr = [];
		while (node) {
			arr.push(node.data);
			node = node.next;
		}
		return arr;
	}

	containsDuplicates() {
		let thisNode = this.head;
		let obj = {};
		while (thisNode) {
			if (obj[thisNode.data]) {
				return true;
			}
			obj[thisNode.data] = thisNode.data;
			thisNode = thisNode.next;
		}
		return false;
	}
}

module.exports = {
	Node,
	LinkedList,
};

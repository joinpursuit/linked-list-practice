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
	insert(value) {
		let node = new Node(value);
		if (this.head === null) {
			this.head = node;
			return;
		}
		node.next = this.head;
		this.head = node;
	}
	size() {
		let current = this.head;
		let sz = 0;
		while (current !== undefined) {
			sz++;
			current = current.next;
		}
		return sz;
	}
	delete(value) {
		let current = this.head;
		let index = 0;
		while (current !== undefined) {
			if (current.data === value) {
				break;
			}
			index++;
			current = current.next;
		}
		let nodeToDelete = current;
		current = this.head;
		for (let i = 1; i < index; i++) {
			current = current.next;
		}
		current.next = nodeToDelete.next;
	}
	getFirst() {
		return this.head;
	}
	getLast() {
		let current = this.head;
		while (current.next !== undefined) {
			current = current.next;
		}
		return current;
	}
	search(value) {
		let current = this.head;
		while (current !== undefined) {
			if (current.data === value) return current;
			current = current.next;
		}
	}
	getKth(index) {
		let current = this.head;
		for (let i = 1; i < index; i++) {
			current = current.next;
		}
		return current;
	}
	getKthToLast(index) {
		return this.getKth(this.size() - index);
	}
	isEmpty() {
		return this.head === undefined;
	}
	clear() {
		this.head = null; //well, this should break it regardless :P
	}
	toArray() {
		let returnArr = [];
		let current = this.head;
		while (current !== undefined) {
			returnArr.push(current.data);
			current = current.next;
		}
		return returnArr;
	}
	containsDuplicates() {
		const original = this.toArray();
		let uniquesOnly = new Set(original);
		return !(original.length === uniquesOnly.size);
	}
}

module.exports = {
	Node,
	LinkedList,
};

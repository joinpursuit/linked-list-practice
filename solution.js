const { nums, words } = require("./data/data.js");

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

	insert(value) {
		let newNode = new Node(value);
		if (!this.head) {
			this.head = newNode;
		} else {
			newNode.next = this.head;
			this.head = newNode;
		}
	}

	size() {
		let count = 0;
		let node = this.head;
		while (node) {
			count++;
			node = node.next;
		}
		return count;
	}

	// cut the link from the head to the first node of the list
	clear() {
		this.head = null;
	}

	// DELETE by the KEY
	// loop to find the key to delete
	// once found stick a pin and reset pointer to the first node
	// loop to the node BEFORE the one we want to delete
	// reset that next value to nodeToDelete.next
	// so the node before it points to the node after it ---- SKIP this node
	delete(key) {
		let node = this.head;
		let nodeCounter = 0;

		while (node.data !== key && node.next) {
			nodeCounter++;
			node = node.next;
		}

		let foundNode = node.next;
		for (let i = 1; i < nodeCounter; i++) {
			node = node.next;
		}
		node.next = foundNode.next;
	}

	getFirst() {
		return this.head;
	}

	getLast() {
		let node = this.head;
		if (!this.head) return null;
		while (node.next) {
			node = node.next;
		}
		return node;
	}

	search(value) {
		// starting point
		let node = this.head;

		while (node !== null && node.data !== value) {
			node = node.next;
		}
		return node;
	}

	// getKth -->  retrieve kth element
	getKth(k) {
		let count = 1;
		let node = this.head;

		if (!this.head) return null;

		while (node !== null) {
			if (count === k) return node;
			node = node.next;
			count++;
		}
		return node;
	}

	// getKthToLast retrieve kth from last element
	getKthToLast(k) {
		let node = this.head;
		let len = this.size();
		let count = 1;
		let target = len - k;

		while (node) {
			if (target === count) return node;
			node = node.next;
			count++;
		}
		return node;
	}

	// isEmpty check if list is empty
	isEmpty() {
		return !this.head ? true : false;
	}

	// toArrayconvert data from linked list to an array
	// loop the LinkedList --> need to know the length???
	// get node.data ---> push into an array
	toArray() {
		let listToArr = [];
		let node = this.head;

		while (node) {
			listToArr.push(node.data);
			node = node.next;
		}
		// console.log(listToArr);
		return listToArr;
	}

	// containsDuplicates check for duplicates - return true if contains duplicates, false if not
	// containsDuplicates() {
	// 	let node = this.head;
	// 	let currEl = node;
	// 	if (this.isEmpty()) return false;

	// 	while (node.next !== null) {
	// 		//currEl compared to rest of the stack
	// 		if (currEl === node || currEl === node.next.data) return true;

	// 		node = node.next;
	// 	}
	// 	return false;
	// }
}

// get the data from each array and create the nodes
// pass in the array
const fetchArrData = (arr) => {
	let prevNode = new Node(arr[0]);
	let list = new LinkedList(prevNode);
	for (let i = 1; i < arr.length; i++) {
		let currNode = new Node(arr[i]);
		prevNode.next = currNode;
		prevNode = currNode;
	}
	return list;
};

const myNumList = fetchArrData(nums);
const myWordList = fetchArrData(words);

module.exports = {
	Node,
	LinkedList,
};

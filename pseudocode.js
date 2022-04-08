// Here is the pseudocode for getKthFromLast and containsDuplicates:

getKthToLast(k) {
		// 0 10 9 8 7 6 5 4 3 2 1
        // hint for finding how many nodes from head
		// k = 1, length = 11, nodeNum = 10
		// k = 5, length = 11, nodeNum = 6
		// k = 8, length = 11, nodeNum = 3

		// find how many nodes from the head
		//    take the number of nodes minus kthFromLast
		// using a counter starting at 1, tranverse the linked list
		// count the nodes until you reach kthFromLast and return the node
  }
	containsDuplicates() {
		// No inputs
		// Returns boolean
		// 10 9 1 7 5 3 2 1
		// create empty obj
		// traverse the list
		//    does it exist in the obj ?
		//       yes: return true
		//       no: store in the object
		// {
		//   10: 1,
		//   9: 1,
		//   1: 1,
		//   7: 1,
		// }
        // if you traversed the entire linked list and found no duplicates return false
        // Alternatively you can use a Set:
		// Compare lengths of nodes to the set, if different return true
	}
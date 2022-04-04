const { Node, LinkedList } = require("../solution.js");

const { nums, words } = require("../data/data.js");
const { exportAllDeclaration, logicalExpression } = require("@babel/types");

describe("Linked Lists", () => {
  let wordList, numList;
  beforeAll(() => {
    wordList = new LinkedList();
    for (let word of words) {
      wordList.insert(word);
    }
    numList = new LinkedList();
    for (let num of nums) {
      numList.insert(num);
    }
  });

  test("Can create a new node", () => {
    let newNode = new Node(111);
    expect(newNode).toStrictEqual(new Node(111));
  });

  test("Can create a new linked list", () => {
    let newList = new LinkedList();
    expect(newList).toStrictEqual(new LinkedList());
  });

  test("Add to the linked list using an insert method", () => {
    let newList = new LinkedList();
    newList.insert(111);
    expect(newList.head.data).toEqual(111);
  });

  test("Count the length of the linked list", () => {
    expect(numList.size()).toEqual(11);
  });

  test("Delete from the linked list by key", () => {
    numList.delete(10);
    expect(numList.size()).toEqual(10);
  });

  test("Retrieve the first element", () => {
    expect(wordList.getFirst().data).toEqual("dog");
  });

  test("Retrieve the last element", () => {
    expect(wordList.getLast().data).toEqual("the");
  });

  test("Find an element by key", () => {
    expect(numList.search(5).data).toEqual(5);
  });

  test("Retrieve kth element", () => {
    expect(numList.getKth(1).data).toEqual(0);
  });

  test("Retrieve kth from last element", () => {
    expect(numList.getKthToLast(1).data).toEqual(2);
  });

  test("Check if list is empty", () => {
    const newList = new LinkedList();
    expect(newList.isEmpty()).toBe(true);
    expect(numList.isEmpty()).toBe(false);
  });

  test("Clear the linked list", () => {
    let tempNumList = new LinkedList();
    for (let num of nums) {
      tempNumList.insert(num);
    }
    tempNumList.clear();
    expect(tempNumList.head).toEqual(null);
  });

  test("Convert data from linked lists into an array", () => {
    expect(numList.toArray()).toEqual([0, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1]);
  });

  test("Check for duplicates", () => {
    expect(numList.containsDuplicates()).toBe(false);
    expect(wordList.containsDuplicates()).toBe(true);
  });
});

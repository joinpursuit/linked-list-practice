const { Node, LinkedList } = require("../solution.js");

const { nums, words } = require("../data/data.js");

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
    const tempNumList = new LinkedList();
    for (let num of nums) {
      tempNumList.insert(num);
    }

    tempNumList.delete(10);
    expect(tempNumList.size()).toEqual(10);
  });

  test("Retrieve the first element", () => {
    expect(wordList.getFirst().data).toEqual("the");
  });

  test("Retrieve the last element", () => {
    expect(wordList.getLast().data).toEqual("dog");
  });

  test("Find an element by key", () => {
    expect(numList.search(5).data).toEqual(5);
  });

  test("Retrieve kth element", () => {
    expect(numList.getKth(1).data).toEqual(1);
    expect(wordList.getKth(2).data).toEqual("quick");
  });

  test("Retrieve kth from last element", () => {
    expect(numList.getKthToLast(1).data).toEqual(0);
    expect(wordList.getKthToLast(2).data).toEqual("lazy");
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
    expect(wordList.toArray()).toEqual([
      "the",
      "quick",
      "brown",
      "fox",
      "jumps",
      "over",
      "the",
      "lazy",
      "dog",
    ]);

    expect(numList.toArray()).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]);
  });

  test("Check for duplicates", () => {
    expect(numList.containsDuplicates()).toBe(false);
    expect(wordList.containsDuplicates()).toBe(true);
  });
});

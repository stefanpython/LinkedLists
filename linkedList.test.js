// const LinkedList = require("./linkedLists");

const LinkedList = require("./linkedLists");
const list = new LinkedList();

describe("LinkedList", () => {
  beforeEach(() => {
    list.prepend(1);
    list.prepend(2);
    list.prepend(3);
  });

  it("should return the size of the list", () => {
    expect(list.listSize()).toEqual(3);
  });

  it("should return the first node in the list", () => {
    expect(list.firstNode()).toEqual(3);
  });

  it("should return the last node in the list", () => {
    expect(list.tail()).toEqual(1);
  });

  it("should return the node at a specific index", () => {
    expect(list.getAt(1).value).toEqual(2);
  });

  it("should remove the last node from the list", () => {
    list.pop();
    expect(list.listSize()).toEqual(list.length - 1);
  });

  it("should check if a value exists in the list", () => {
    expect(list.contains(2)).toBeTruthy();
  });

  it("should return the index of a value if it exists in the list", () => {
    expect(list.find(2)).toEqual(1);
  });

  it("should insert a value at a specific index", () => {
    list.insertAt(4, 1);
    expect(list.getAt(1).value).toEqual(4);
  });

  it("should remove a node at a specific index", () => {
    list.removeAt(1);
    expect(list.getAt(1).value).toEqual(1);
  });
});

const { mergeTwoLists } = require("./mergeTwoLists");

describe("mergeTwoLists", () => {
  test("should return empty if input is empty", () => {
    let list1 = [];
    let list2 = [];
    let output = [];
    expect(mergeTwoLists(list1, list2)).toEqual(output);
  });
  test("given an empty list, should return the head of the none empty node", () => {
    let list1 = [0];
    let list2 = [];
    let output = [0];
    expect(mergeTwoLists(list1, list2)).toEqual(output);
  });
  test("given an empty list, should return the head of the none empty node", () => {
    let list1 = [1, 2, 4];
    let list2 = [1, 3, 4];
    let output = [1, 1, 2, 3, 4, 4];
    expect(mergeTwoLists(list1, list2)).toEqual(output);
  });
});

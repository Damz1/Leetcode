const { removeDuplicates } = require("./removeDuplicatesFromSortedArray");

describe("removeDuplicates", () => {
  test("should return ", () => {
    expect(removeDuplicates([1, 1, 2])).toBe(2);
  });
  test("should return ", () => {
    expect(removeDuplicates([1, 2, 3, 3, 4])).toBe(4);
  });
});

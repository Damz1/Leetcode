const { removeDuplicates } = require("./removeDuplicatesFromSortedArray");

describe("removeDuplicates", () => {
  test("should return the correct number of unique elements and modify the array correctly", () => {
    let nums = [1, 1, 2];
    expect(removeDuplicates(nums)).toBe(2);
    expect(nums.slice(0, 2)).toEqual([1, 2]);

    nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4];
    expect(removeDuplicates(nums)).toBe(5);
    expect(nums.slice(0, 5)).toEqual([0, 1, 2, 3, 4]);

    nums = [1, 1, 1, 1, 1];
    expect(removeDuplicates(nums)).toBe(1);
    expect(nums.slice(0, 1)).toEqual([1]);
  });

  test("should handle an empty array", () => {
    let nums = [];
    expect(removeDuplicates(nums)).toBe(0);
    expect(nums).toEqual([]);
  });

  test("should handle an array with only one unique element", () => {
    let nums = [5, 5, 5, 5, 5];
    expect(removeDuplicates(nums)).toBe(1);
    expect(nums.slice(0, 1)).toEqual([5]);
  });
});

const { binarySearch } = require("../binarySearch");

describe("binarySearch", () => {
  it("should return the index of the target if it exists in the array", () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 9)).toBe(4);
  });

  it("should return -1 if the target does not exist in the array", () => {
    expect(binarySearch([-1, 0, 3, 5, 9, 12], 2)).toBe(-1);
  });

  it("should return the index of the target if it exists in a large array", () => {
    expect(
      binarySearch(
        Array.from({ length: 1000 }, (_, i) => i),
        500
      )
    ).toBe(500);
  });

  it("should return 0 if only item is the target", () => {
    expect(binarySearch([5], 5)).toBe(0);
  });

  it("should return -1 if the target is smaller than the smallest element in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], -1)).toBe(-1);
  });

  it("should return -1 if the target is larger than the largest element in the array", () => {
    expect(binarySearch([1, 2, 3, 4, 5], 10)).toBe(-1);
  });
});

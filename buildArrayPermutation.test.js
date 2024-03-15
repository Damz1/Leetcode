const { buildArray } = require("./buildArrayPermutation");

describe("buildArray", () => {
  it("should return the correct array according to the given permutation", () => {
    const nums1 = [0, 2, 1, 5, 3, 4];
    const expected1 = [0, 1, 2, 4, 5, 3];
    expect(buildArray(nums1)).toEqual(expected1);
  });
  it("should handle an empty permutation array", () => {
    const nums = [];
    const expected = [];
    expect(buildArray(nums)).toEqual(expected);
  });

  it("should handle permutation arrays with one element", () => {
    const nums = [0];
    const expected = [0];
    expect(buildArray(nums)).toEqual(expected);
  });

  it("should handle permutation arrays with consecutive numbers", () => {
    const nums = [0, 1, 2, 3, 4];
    const expected = [0, 1, 2, 3, 4];
    expect(buildArray(nums)).toEqual(expected);
  });
});

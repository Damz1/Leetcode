const { twoSum } = require("./TwoSumII");

describe("twoSum", () => {
  it("should return [1,2] for numbers = [2,7,11,15] and target = 9", () => {
    expect(twoSum([2, 7, 11, 15], 9)).toEqual([1, 2]);
  });

  it("should return [1,3] for numbers = [2,3,4] and target = 6", () => {
    expect(twoSum([2, 3, 4], 6)).toEqual([1, 3]);
  });

  it("should return [1,2] for numbers = [-1,0] and target = -1", () => {
    expect(twoSum([-1, 0], -1)).toEqual([1, 2]);
  });

  it("should handle edge case when target is zero", () => {
    expect(twoSum([-1, 0, 1], 0)).toEqual([1, 3]);
  });

  it("should handle edge case when numbers contain duplicate elements", () => {
    expect(twoSum([3, 3], 6)).toEqual([1, 2]);
  });
});

const { goodPairs } = require("../goodPairs");

describe("goodPairs", () => {
  test("Example 1: Input: nums = [1,2,3,1,1,3], Output: 4", () => {
    const nums = [1, 2, 3, 1, 1, 3];
    const result = goodPairs(nums);
    expect(result).toBe(4);
  });

  test("Example 2: Input: nums = [1,1,1,1], Output: 6", () => {
    const nums = [1, 1, 1, 1];
    const result = goodPairs(nums);
    expect(result).toBe(6);
  });

  test("Example 3: Input: nums = [1,2,3], Output: 0", () => {
    const nums = [1, 2, 3];
    const result = goodPairs(nums);
    expect(result).toBe(0);
  });
});

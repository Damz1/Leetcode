const { findMaxAverage } = require("../maxAvgSubarray");

describe("findMaxAverage", () => {
  test("Example 1", () => {
    const nums = [1, 12, -5, -6, 50, 3];
    const k = 4;
    expect(findMaxAverage(nums, k)).toBeCloseTo(12.75, 5);
  });

  test("Example 2", () => {
    const nums = [5];
    const k = 1;
    expect(findMaxAverage(nums, k)).toBeCloseTo(5.0, 5);
  });

  test("Test Case with Negative Numbers", () => {
    const nums = [-1, -2, -3, -4, -5];
    const k = 3;
    expect(findMaxAverage(nums, k)).toBeCloseTo(-2, 5);
  });

  test("Test Case with All Positive Numbers", () => {
    const nums = [1, 2, 3, 4, 5];
    const k = 3;
    expect(findMaxAverage(nums, k)).toBeCloseTo(4, 5);
  });

  test("Test Case with All Negative Numbers", () => {
    const nums = [-1, -2, -3, -4, -5];
    const k = 1;
    expect(findMaxAverage(nums, k)).toBeCloseTo(-1, 5);
  });
});

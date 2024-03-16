const { threeSumClosest } = require("../3SumClosest");

describe("threeSumClosest", () => {
  test("should return the closest sum to the target when the target is positive", () => {
    let input = [-1, 2, 1, -4];
    let target = 1;
    let output = 2;
    expect(threeSumClosest(input, target)).toBe(output);
  });

  test("should return the closest sum to the target when the target is negative", () => {
    let input = [1, 1, 1, 0];
    let target = -100;
    let output = 2;
    expect(threeSumClosest(input, target)).toBe(output);
  });

  test("should return the closest sum to the target when the array contains only zeros", () => {
    let input = [0, 0, 0];
    let target = 1;
    let output = 0;
    expect(threeSumClosest(input, target)).toBe(output);
  });

  test("should return the closest sum to the target when the array contains positive and negative numbers", () => {
    let input = [-1, 2, 1, -4, 5];
    let target = 5;
    let output = 5;
    expect(threeSumClosest(input, target)).toBe(output);
  });
});

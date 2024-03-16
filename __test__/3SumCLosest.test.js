const { threeSumClosest } = require("../3SumClosest");

describe("first", () => {
  test("should first", () => {
    let input = [-1, 2, 1, -4];
    let target = 1;
    let output = 2;
    expect(threeSumClosest(input, target)).toBe(output);
  });
});

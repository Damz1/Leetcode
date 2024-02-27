const { maxArea } = require("./maxArea");

describe("maxArea", () => {
  test("should return 49", () => {
    let input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    expect(maxArea(input)).toBe(49);
  });
});

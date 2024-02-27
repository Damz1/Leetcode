const { maxArea } = require("./maxArea");

describe("maxArea", () => {
  test("should return 49", () => {
    let input = [1, 8, 6, 2, 5, 4, 8, 3, 7];
    expect(maxArea(input)).toBe(49);
  });
  test("should return 1 for [1,1]", () => {
    expect(maxArea([1, 1])).toBe(1);
  });

  test("should return 16 for [4,3,2,1,4]", () => {
    expect(maxArea([4, 3, 2, 1, 4])).toBe(16);
  });
});

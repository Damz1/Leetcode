const { finalValueAfterOperations } = require("../finalValueAfterOperations");

describe("finalvalue", () => {
  test("should return 1", () => {
    let input = ["--X", "X++", "X++"];
    let output = 1;
    expect(finalValueAfterOperations(input)).toBe(output);
  });
  test("should return 0 when operations cancel each other out", () => {
    let input = ["++X", "--X", "X++", "X--"];
    let output = 0;
    expect(finalValueAfterOperations(input)).toBe(output);
  });
  test("should return 0 when no operations are provided", () => {
    let input = [];
    let output = 0;
    expect(finalValueAfterOperations(input)).toBe(output);
  });
  test("should return correct sum with mixed operations", () => {
    let input = ["++X", "--X", "X++", "X--", "++X", "--X"];
    let output = 0;
    expect(finalValueAfterOperations(input)).toBe(output);
  });
  test("should return negative sum with more decrement operations than increment operations", () => {
    let input = ["--X", "X--", "--X", "X--", "++X"];
    let output = -3;
    expect(finalValueAfterOperations(input)).toBe(output);
  });
  test("should return positive sum with more increment operations than decrement operations", () => {
    let input = ["++X", "X++", "++X", "X++", "--X"];
    let output = 3;
    expect(finalValueAfterOperations(input)).toBe(output);
  });
});

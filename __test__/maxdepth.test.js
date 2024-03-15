const { maxDepthParentheses } = require("../maxDepth");

describe("maxDepthParentheses", () => {
  test("Example 1", () => {
    const s = "(1+(2*3)+((8)/4))+1";
    expect(maxDepthParentheses(s)).toBe(3);
  });

  test("Example 2", () => {
    const s = "(1)+((2))+(((3)))";
    expect(maxDepthParentheses(s)).toBe(3);
  });

  test("Unmatched Parentheses", () => {
    const s = "(1)+((2))+((3)))";
    expect(maxDepthParentheses(s)).toBe(-1);
  });

  test("Empty String", () => {
    const s = "";
    expect(maxDepthParentheses(s)).toBe(0);
  });

  test("Single Character String", () => {
    const s = "1";
    expect(maxDepthParentheses(s)).toBe(0);
  });

  test("No Parentheses", () => {
    const s = "1+2+3";
    expect(maxDepthParentheses(s)).toBe(0);
  });
});

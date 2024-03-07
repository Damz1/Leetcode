const { isValid } = require("./ValidParentheses");

describe("isValid function", () => {
  test("Valid parentheses: ()", () => {
    expect(isValid("()")).toBe(true);
  });

  test("Valid parentheses: ()[]{}", () => {
    expect(isValid("()[]{}")).toBe(true);
  });

  test("Invalid parentheses: (]", () => {
    expect(isValid("(]")).toBe(false);
  });

  test("Invalid parentheses: ([)]", () => {
    expect(isValid("([)]")).toBe(false);
  });

  test("Valid parentheses: {[]}", () => {
    expect(isValid("{[]}")).toBe(true);
  });

  test("Invalid parentheses: ((((((", () => {
    expect(isValid("((((((")).toBe(false);
  });

  test("Invalid parentheses: ]", () => {
    expect(isValid("]")).toBe(false);
  });

  test("Invalid parentheses: ([", () => {
    expect(isValid("([")).toBe(false);
  });

  test("Invalid parentheses: }{", () => {
    expect(isValid("}{")).toBe(false);
  });
});

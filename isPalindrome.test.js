const { isPalindrome } = require("./isPalindrome.js");

describe("isPalindrome", () => {
  it("should return true for a palindrome string", () => {
    expect(isPalindrome("racecar")).toBe(true);
  });

  it("should return false for a non-palindrome string", () => {
    expect(isPalindrome("hello")).toBe(false);
  });

  it("should return true for an empty string", () => {
    expect(isPalindrome("")).toBe(true);
  });

  it("should return true for a single character string", () => {
    expect(isPalindrome("a")).toBe(true);
  });
});

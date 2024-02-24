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

  it("should ignore non-alphanumeric characters", () => {
    expect(isPalindrome("A man, a plan, a canal: Panama")).toBe(true);
  });

  it("should handle strings with non-alphanumeric characters properly", () => {
    expect(isPalindrome("Able was I, ere I saw Elba!")).toBe(true);
  });
  it("should return true for a palindrome string with spaces and different cases", () => {
    expect(isPalindrome("A man a plan a canal Panama")).toBe(true);
  });
});

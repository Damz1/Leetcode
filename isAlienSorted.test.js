const { isAlienSorted } = require("./isAlienSorted");

describe("isAlienSorted", () => {
  it("should return true if words are sorted lexicographically in the alien language", () => {
    const words = ["hello", "leetcode"];
    const order = "hlabcdefgijkmnopqrstuvwxyz";
    expect(isAlienSorted(words, order)).toBe(true);
  });

  it.only("should return false if words are not sorted lexicographically in the alien language", () => {
    const words = ["word", "world", "row"];
    const order = "worldabcefghijkmnpqstuvxyz";
    expect(isAlienSorted(words, order)).toBe(false);
  });

  it("should return false if the second word is shorter but precedes the first word", () => {
    const words = ["apple", "app"];
    const order = "abcdefghijklmnopqrstuvwxyz";
    expect(isAlienSorted(words, order)).toBe(false);
  });

  it("should return true if words are already sorted in alphabetical order", () => {
    const words = ["apple", "banana", "cherry"];
    const order = "abcdefghijklmnopqrstuvwxyz";
    expect(isAlienSorted(words, order)).toBe(true);
  });

  it("should return true if there is only one word", () => {
    const words = ["unique"];
    const order = "abcdefghijklmnopqrstuvwxyz";
    expect(isAlienSorted(words, order)).toBe(true);
  });
});

const { countGoodSubstrings } = require("./countGoodSubstrings");

describe("countGoodSubstrings", () => {
  test("should return 1 in a simple 3 chars string", () => {
    let s = "abc";
    expect(countGoodSubstrings(s)).toBe(1);
  });
  test("should return 1 in xyzzaz", () => {
    let s = "xyzzaz"; //xyz
    expect(countGoodSubstrings(s)).toBe(1);
  });
  test("should return 4 in aababcabc", () => {
    let s = "aababcabc"; //"abc", "bca", "cab", "abc"
    expect(countGoodSubstrings(s)).toBe(4);
  });
});

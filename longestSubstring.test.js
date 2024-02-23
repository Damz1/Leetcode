const { longestSubstring } = require("./longestSubstring");

describe("length_of_longest_substring", () => {
  test('Example 1: "abcabcbb"', () => {
    expect(longestSubstring("abcabcbb")).toBe(3);
  });

  test('Example 2: "bbbbb"', () => {
    expect(longestSubstring("bbbbb")).toBe(1);
  });

  test('Example 3: "pwwkew"', () => {
    expect(longestSubstring("pwwkew")).toBe(3);
  });
});

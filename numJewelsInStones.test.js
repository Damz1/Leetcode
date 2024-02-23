const { numJewelsInStones } = require("./numJewelsInStones");

describe("numJewelsInStones", () => {
  it("should return 3", () => {
    let jewels = "aA";
    let stones = "aAAbbbb";
    let output = 3;

    expect(numJewelsInStones(jewels, stones)).toBe(output);
  });

  it("returns 0 when jewels and stones are empty", () => {
    expect(numJewelsInStones("", "")).toBe(0);
  });

  it("returns 0 when jewels are empty and stones are non-empty", () => {
    expect(numJewelsInStones("", "abc")).toBe(0);
  });

  it("returns 0 when stones are empty", () => {
    expect(numJewelsInStones("abc", "")).toBe(0);
  });

  it("returns the correct count of jewels in stones", () => {
    expect(numJewelsInStones("aA", "aAAbbbb")).toBe(3);
    expect(numJewelsInStones("z", "ZZ")).toBe(0);
    expect(numJewelsInStones("abc", "abc")).toBe(3);
  });

  it("is case-sensitive", () => {
    expect(numJewelsInStones("a", "A")).toBe(0);
    expect(numJewelsInStones("A", "a")).toBe(0);
  });

  it("handles different jewel-stone combinations", () => {
    expect(numJewelsInStones("abc", "def")).toBe(0);
    expect(numJewelsInStones("abc", "abcdabc")).toBe(6);
    expect(numJewelsInStones("abc", "aabbcc")).toBe(6);
  });
});

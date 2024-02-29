const { countPairs } = require("./countPairs");
describe("countPairs", () => {
  it("returns the number of pairs where the sum is less than the target", () => {
    expect(countPairs([-1, 1, 2, 3, 1], 2)).toBe(3);
  });
  it("handles cases with all pairs satisfying the condition", () => {
    expect(countPairs([-1, -2, -3, -4, -5], 0)).toBe(10);
  });

  it("handles edge cases", () => {
    expect(countPairs([], 5)).toBe(0);
    expect(countPairs([5], 5)).toBe(0);
  });

  it("handles cases with duplicate elements", () => {
    expect(countPairs([1, 1, 1, 1], 3)).toBe(6);
  });
});

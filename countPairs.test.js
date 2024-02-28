const { countPairs } = require("./countPairs");
describe("countPairs", () => {
  it("returns the number of pairs where the sum is less than the target", () => {
    expect(countPairs([-1, 1, 2, 3, 1], 2)).toBe(3);
  });
});

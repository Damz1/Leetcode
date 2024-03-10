const { maxProfit } = require("./bestTimeToBuyAndSellStock");

describe("maxProfit", () => {
  test("should return 5", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });
});

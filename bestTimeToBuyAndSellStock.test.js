const { maxProfit } = require("./bestTimeToBuyAndSellStock");

describe("maxProfit", () => {
  test("should return 5", () => {
    expect(maxProfit([7, 1, 5, 3, 6, 4])).toBe(5);
  });
  test("should return 0 when prices array is empty", () => {
    expect(maxProfit([])).toBe(0);
  });

  test("should return 0 when all prices are the same", () => {
    expect(maxProfit([5, 5, 5, 5, 5])).toBe(0);
  });

  test("should return 0 when prices are in descending order", () => {
    expect(maxProfit([6, 5, 4, 3, 2, 1])).toBe(0);
  });

  test("should return 4 when there's only one buying opportunity", () => {
    expect(maxProfit([1, 2, 3, 4, 5])).toBe(4);
  });
});

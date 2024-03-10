const { minimumDifference } = require("./minimumDifference");

describe("minimumDifference", () => {
  it("returns 0 for input [90] and k = 1", () => {
    expect(minimumDifference([90], 1)).toBe(0);
  });

  it("returns 2 for input [9,4,1,7] and k = 2", () => {
    expect(minimumDifference([9, 4, 1, 7], 2)).toBe(2);
  });

  it("returns 1 for input [5,3,2,1,4] and k = 2", () => {
    expect(minimumDifference([5, 3, 2, 1, 4], 2)).toBe(1);
  });
});

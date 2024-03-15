const { divisorSubstrings } = require("../divisorSubstrings");

describe("K-Beauty of a Number", () => {
  it.only("Case 1: Basic example", () => {
    expect(divisorSubstrings(240, 2)).toEqual(2);
  });

  it("Case 2: Edge case with single digit number", () => {
    expect(divisorSubstrings(7, 1)).toEqual(1);
  });

  it("Case 3: When k is greater than the number length", () => {
    expect(divisorSubstrings(1234, 5)).toEqual(0);
  });

  it("Case 4: Zero is not a divisor", () => {
    expect(divisorSubstrings(1000, 2)).toEqual(1);
  });
});

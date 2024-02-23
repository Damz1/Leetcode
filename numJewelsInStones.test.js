const { numJewelsInStones } = require("./numJewelsInStones");

describe("numJewelsInStones", () => {
  test("should return 3", () => {
    let jewels = "aA";
    let stones = "aAAbbbb";
    let output = 3;

    expect(numJewelsInStones(jewels, stones)).toBe(output);
  });
});

const { romanToInt } = require("../romanToInteger");

describe("romanToInt", () => {
  test("should return 3 for III", () => {
    let input = "III";
    let output = 3;
    expect(romanToInt(input)).toBe(output);
  });
});

const { romanToInt } = require("./romanToInteger");

describe("romanToInt", () => {
  test("should return 3 for III", () => {
    let input = "III";
    let output = 3;
    expect(romanToInt(input)).toBe(output);
  });
  test("shoud return 58", () => {
    let input = "LVIII";
    let output = 58;
    expect(romanToInt(input)).toBe(output);
  });
  test("shoud return 58", () => {
    let input = "MCMXCIV";
    let output = 1994;
    expect(romanToInt(input)).toBe(output);
  });
});

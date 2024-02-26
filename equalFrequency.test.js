const { equalFrequency } = require("./equalFrequency");

describe("equalFrequency", () => {
  test("should return true", () => {
    expect(equalFrequency("abcc")).toBe(true);
  });
  test("should return false for same frequency of chars", () => {
    expect(equalFrequency("aacc")).toBe(false);
  });
});

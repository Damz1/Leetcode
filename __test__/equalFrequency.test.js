const { equalFrequency } = require("../equalFrequency");

describe("equalFrequency", () => {
  test("should return true for equal frequency of all chars", () => {
    expect(equalFrequency("abcc")).toBe(true);
  });

  test("should return false for same frequency of chars appearing more than once", () => {
    expect(equalFrequency("aacc")).toBe(false);
  });

  test("should return true for equal frequency of all chars", () => {
    expect(equalFrequency("abc")).toBe(true);
  });

  test("should return true for equal frequency of all chars", () => {
    expect(equalFrequency("bbac")).toBe(true);
  });

  test("should return false for different frequency of chars", () => {
    expect(equalFrequency("babbdd")).toBe(false);
  });

  test("should return true for equal frequency of all chars", () => {
    expect(equalFrequency("zz")).toBe(true);
  });
});

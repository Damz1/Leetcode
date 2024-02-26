const { equalFrequency } = require("./equalFrequency");

describe("equalFrequency", () => {
  test("should return true", () => {
    expect(equalFrequency("abcc")).toBe(true);
  });
});

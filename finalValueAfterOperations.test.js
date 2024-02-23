const { finalValueAfterOperations } = require("./finalValueAfterOperations");

describe("finalvalue", () => {
  test("should return 1", () => {
    let input = ["--X", "X++", "X++"];
    let output = 1;
    expect(finalValueAfterOperations(input)).toBe(output);
  });
});

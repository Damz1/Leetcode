const { minPartitions } = require("../minPartitions");

describe("minPartitions", () => {
  test("return 1 if n is deci-binary", () => {
    expect(minPartitions("110")).toBe(1);
  });
  test("return 3 on 32", () => {
    expect(minPartitions("32")).toBe(3);
  });
  test("return 9 on 987654321", () => {
    expect(minPartitions("987654321")).toBe(9);
  });
  test("return 5 on 54321", () => {
    expect(minPartitions("54321")).toBe(5);
  });
  test("return 0 on single digit 0", () => {
    expect(minPartitions("0")).toBe(0);
  });
  test("return 9 on large number 9999999999999", () => {
    expect(minPartitions("9999999999999")).toBe(9);
  });
});

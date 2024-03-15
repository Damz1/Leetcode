const { decrypt } = require("../defuseTheBomb");

describe("decrypt", () => {
  test("Decrypt code with k > 0", () => {
    expect(decrypt([5, 7, 1, 4], 3)).toEqual([12, 10, 16, 13]);
  });

  test("Decrypt code with k = 0", () => {
    expect(decrypt([1, 2, 3, 4], 0)).toEqual([0, 0, 0, 0]);
  });

  test("Decrypt code with k < 0", () => {
    expect(decrypt([2, 4, 9, 3], -2)).toEqual([12, 5, 6, 13]);
  });
});

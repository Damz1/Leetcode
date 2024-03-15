const { threeSum } = require("../threeSum"); //

describe("Three Sum", () => {
  test("Example 1", () => {
    const nums = [-1, 0, 1, 2, -1, -4];
    const expectedOutput = [
      [-1, -1, 2],
      [-1, 0, 1],
    ];
    expect(threeSum(nums)).toEqual(expectedOutput);
  });
  test("Array with only one element should return an empty array", () => {
    const nums = [1];
    expect(threeSum(nums)).toEqual([]);
  });

  test("Array with all zeros should return only one triplet [0, 0, 0]", () => {
    const nums = [0, 0, 0];
    expect(threeSum(nums)).toEqual([[0, 0, 0]]);
  });

  test("Array with no valid triplet should return an empty array", () => {
    const nums = [1, 2, 3];
    expect(threeSum(nums)).toEqual([]);
  });

  test("Array with negative numbers only should return all unique triplets", () => {
    const nums = [-3, -2, -1, 0, 1, 2, 3];
    const expected = [
      [-3, 0, 3],
      [-3, 1, 2],
      [-2, -1, 3],
      [-2, 0, 2],
      [-1, 0, 1],
    ];
    expect(threeSum(nums)).toEqual(expect.arrayContaining(expected));
  });
});

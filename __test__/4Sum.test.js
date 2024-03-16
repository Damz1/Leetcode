const { fourSum } = require("../4Sum");

describe("fourSum", () => {
  it("should return the correct quadruplets for the given input", () => {
    const nums1 = [1, 0, -1, 0, -2, 2];
    const target1 = 0;
    const expected1 = [
      [-2, -1, 1, 2],
      [-2, 0, 0, 2],
      [-1, 0, 0, 1],
    ];

    expect(fourSum(nums1, target1)).toEqual(expect.arrayContaining(expected1));
  });
});

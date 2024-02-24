const { moveZeros } = require("./moveZeros");

describe("moveZeros", () => {
  it("should move all zeroes to the end while maintaining relative order for [0,1,0,3,12]", () => {
    const nums = [0, 1, 0, 3, 12];
    const expected = [1, 3, 12, 0, 0];
    moveZeros(nums);
    expect(nums).toEqual(expected);
  });

  it("should move all zeroes to the end while maintaining relative order for [0]", () => {
    const nums = [0];
    const expected = [0];
    moveZeros(nums);
    expect(nums).toEqual(expected);
  });
});

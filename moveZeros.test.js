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
  it("should move all zeroes to the end while maintaining relative order for [1, 2, 0, 0, 4]", () => {
    const nums = [1, 2, 0, 0, 4];
    const expected = [1, 2, 4, 0, 0];
    moveZeros(nums);
    expect(nums).toEqual(expected);
  });

  it("should move all zeroes to the end while maintaining relative order for [0, 0, 0, 0, 0]", () => {
    const nums = [0, 0, 0, 0, 0];
    const expected = [0, 0, 0, 0, 0];
    moveZeros(nums);
    expect(nums).toEqual(expected);
  });

  it("should move all zeroes to the end while maintaining relative order for [1, 0, 2, 0, 3, 0]", () => {
    const nums = [1, 0, 2, 0, 3, 0];
    const expected = [1, 2, 3, 0, 0, 0];
    moveZeros(nums);
    expect(nums).toEqual(expected);
  });

  it("should move all zeroes to the end while maintaining relative order for [5, 4, 3, 2, 1]", () => {
    const nums = [5, 4, 3, 2, 1];
    const expected = [5, 4, 3, 2, 1];
    moveZeros(nums);
    expect(nums).toEqual(expected);
  });
});

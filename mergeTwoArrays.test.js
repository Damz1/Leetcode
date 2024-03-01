const { mergeTwoarrays } = require("./mergeTwoarrays");

describe("mergeTwoarrays", () => {
  test("should return empty if input is empty", () => {
    let array1 = [];
    let array2 = [];
    let output = [];
    expect(mergeTwoarrays(array1, array2)).toEqual(output);
  });
  test("given an empty array, should return the head of the none empty node", () => {
    let array1 = [0];
    let array2 = [];
    let output = [0];
    expect(mergeTwoarrays(array1, array2)).toEqual(output);
  });
  test("should merge correctly given two arrays of same size", () => {
    let array1 = [1, 2, 4];
    let array2 = [1, 3, 4];
    let output = [1, 1, 2, 3, 4, 4];
    expect(mergeTwoarrays(array1, array2)).toEqual(output);
  });
  test("should merge correctly given two arrays in different sizes", () => {
    const array1 = [1, 3, 5];
    const array2 = [2, 4, 6, 7, 8];
    const output = [1, 2, 3, 4, 5, 6, 7, 8];
    expect(mergeTwoarrays(array1, array2)).toEqual(output);
  });
});

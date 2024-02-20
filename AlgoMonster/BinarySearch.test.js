const { binarySearch } = require("./BinarySearch");

describe("binary search", () => {
  test("should return correct for array of 30", () => {
    let inputArr = [
      1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21,
      22, 23, 24, 25, 26, 27, 28, 29, 30,
    ];
    let inputTarget = 4;
    let output = 3;

    expect(binarySearch(inputArr, inputTarget)).toBe(output);
  });
  test("should return correct for random array numbers", () => {
    let inputArr = [15, 31, 58, 68, 87, 112, 128, 148, 159, 171];

    let inputTarget = 159;
    let output = 8;

    expect(binarySearch(inputArr, inputTarget)).toBe(output);
  });
  test("should return correct for random array numbers", () => {
    let inputArr = [15, 31, 58, 68, 87, 112, 128, 148, 159, 171];

    let inputTarget = 200;
    let output = -1;

    expect(binarySearch(inputArr, inputTarget)).toBe(output);
  });
});

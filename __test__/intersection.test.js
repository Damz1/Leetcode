const { intersection } = require("../intersection");

describe("intersection", () => {
  test("should return [2]", () => {
    let nums1 = [1, 2, 2, 1];
    let nums2 = [2, 2];
    let output = [2];

    expect(intersection(nums1, nums2)).toEqual(output);
  });

  test("should return [] for no intersection", () => {
    let nums1 = [1, 2, 3];
    let nums2 = [4, 5, 6];
    let output = [];
    expect(intersection(nums1, nums2)).toEqual(output);
  });

  test("should return [3, 4] for multiple intersections", () => {
    let nums1 = [1, 2, 3, 4];
    let nums2 = [3, 4, 5, 6];
    let output = [3, 4];
    expect(intersection(nums1, nums2)).toEqual(output);
  });

  test("should return [] for empty arrays", () => {
    let nums1 = [];
    let nums2 = [];
    let output = [];
    expect(intersection(nums1, nums2)).toEqual(output);
  });

  test("should return [-2, 3] for arrays with negative numbers", () => {
    let nums1 = [-1, -2, 3, 4];
    let nums2 = [-2, 3, -4];
    let output = [-2, 3];
    expect(intersection(nums1, nums2)).toEqual(output);
  });

  test("should return [2, 3] for arrays with duplicate elements", () => {
    let nums1 = [1, 2, 2, 3, 4];
    let nums2 = [2, 2, 3, 3, 5];
    let output = [2, 3];
    expect(intersection(nums1, nums2)).toEqual(output);
  });

  test("should return [1] for arrays with all elements being the same", () => {
    let nums1 = [1, 1, 1];
    let nums2 = [2, 1, 1];
    let output = [1];
    expect(intersection(nums1, nums2)).toEqual(output);
  });
  test("should return currect with large inputs", () => {
    let nums1 = [
      43, 85, 49, 2, 83, 2, 39, 99, 15, 70, 39, 27, 71, 3, 88, 5, 19, 5, 68, 34,
      7, 41, 84, 2, 13, 85, 12, 54, 7, 9, 13, 19, 92,
    ];
    let nums2 = [
      10, 8, 53, 63, 58, 83, 26, 10, 58, 3, 61, 56, 55, 38, 81, 29, 69, 55, 86,
      23, 91, 44, 9, 98, 41, 48, 41, 16, 42, 72, 6, 4, 2, 81, 42, 84, 4, 13,
    ];
    let output = [2, 3, 9, 13, 41, 83, 84];
    expect(intersection(nums1, nums2)).toEqual(output);
  });
});

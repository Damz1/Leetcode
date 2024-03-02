const { intersection } = require("./intersection");

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
    let nums2 = [1, 1, 1];
    let output = [1];
    expect(intersection(nums1, nums2)).toEqual(output);
  });
});

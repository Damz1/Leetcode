const { smallerNumbersThanCurrent } = require("./smallerNumbersThanCurrent.js");

test("Example 1", () => {
  const nums = [8, 1, 2, 2, 3];
  const expectedOutput = [4, 0, 1, 1, 3];
  expect(smallerNumbersThanCurrent(nums)).toEqual(expectedOutput);
});

test("Example 2", () => {
  const nums = [6, 5, 4, 8];
  const expectedOutput = [2, 1, 0, 3];
  expect(smallerNumbersThanCurrent(nums)).toEqual(expectedOutput);
});

test("Example 3", () => {
  const nums = [7, 7, 7, 7];
  const expectedOutput = [0, 0, 0, 0];
  expect(smallerNumbersThanCurrent(nums)).toEqual(expectedOutput);
});

test("Custom Test Case", () => {
  const nums = [5, 4, 3, 2, 1];
  const expectedOutput = [4, 3, 2, 1, 0];
  expect(smallerNumbersThanCurrent(nums)).toEqual(expectedOutput);
});

test("Custom Test Case", () => {
  const nums = [1, 2, 3, 4, 5];
  const expectedOutput = [0, 1, 2, 3, 4];
  expect(smallerNumbersThanCurrent(nums)).toEqual(expectedOutput);
});

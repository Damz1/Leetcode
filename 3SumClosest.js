/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b);
  let minDifference = Infinity;
  let resultSum = nums[0] + nums[1] + nums[2];

  for (let i = 0; i < nums.length - 2; i++) {
    let left = i + 1;
    let right = nums.length - 1;

    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];

      if (sum === target) {
        return sum;
      } else if (sum < target) {
        left++;
      } else {
        right--;
      }

      let diffToTarget = Math.abs(sum - target);
      if (diffToTarget < minDifference) {
        resultSum = sum;
        minDifference = diffToTarget;
      }
    }
  }
  return resultSum;
};

module.exports = { threeSumClosest };
/*
16. 3Sum Closest

Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.

Example 1:

Input: nums = [-1,2,1,-4], target = 1
Output: 2
Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
*/

const countPairs = (nums, target) => {
  let sortedNums = nums.sort();
  let left = 0;
  let n = nums.length;
  let right = n - 1;
  let count = 0;

  while (left < right) {
    if (nums[left] + nums[right] >= target) {
      right--;
    } else if (nums[left] + nums[right] < target) {
      count += right - left;
      left++;
    }
  }
  return count;
};

module.exports = { countPairs };

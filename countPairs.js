const countPairs = (nums, target) => {
  // (i, j) where 0 <= i < j < n and nums[i] + nums[j] < target.
  let n = nums.length;
  let count = 0;

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (0 <= i && i < j && j < n && nums[i] + nums[j] < target) count++;
    }
  }
  return count;
};

module.exports = { countPairs };

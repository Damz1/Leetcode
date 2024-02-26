const removeDuplicates = (nums) => {
  let n = nums.length;
  if (n < 2) return n;

  let L = 0;
  let R = 1;

  while (R < n) {
    if (nums[L] !== nums[R]) {
      L++;
      nums[L] = nums[R];
    }
    R++;
  }
  return L + 1;
};

module.exports = { removeDuplicates };

removeDuplicates([1, 2, 3, 3, 4]);

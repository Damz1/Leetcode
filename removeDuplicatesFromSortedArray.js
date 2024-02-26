const removeDuplicates = (nums) => {
  let n = nums.length;
  if (n < 2) return n;

  let L = 0;
  let R = 1;

  while (R < n) {
    console.log("nums", nums);
    if (nums[L] !== nums[R]) {
      L++;
      nums[L] = nums[R];
      console.log("nums in 13", nums);
    }
    R++;
  }
  return L + 1;
};

module.exports = { removeDuplicates };

removeDuplicates([1, 2, 3, 3, 4]);

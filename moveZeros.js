const moveZeros = (nums) => {
  let n = nums.length;
  if (n < 2) return;

  let L = 0;
  let R = 1;
  while (R < n) {
    console.log("nums", nums);
    if (nums[L] !== 0) {
      L++;
      R++;
    } else if (nums[R] == 0) {
      R++;
    } else {
      let temp = nums[R];
      nums[R] = nums[L];
      nums[L] = temp;
    }
  }
};

module.exports = { moveZeros };

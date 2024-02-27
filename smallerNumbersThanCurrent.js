const smallerNumbersThanCurrent = (nums) => {
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    const element = nums[i];
    let count = 0;
    for (num of nums) {
      if (num < element) {
        count++;
      }
    }
    result.push(count);
  }
  return result;
};

module.exports = { smallerNumbersThanCurrent };

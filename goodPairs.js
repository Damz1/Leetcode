const goodPairs = (nums) => {
  let frequency = {};
  let count = 0;

  for (let num of nums) {
    frequency[num] = (frequency[num] || 0) + 1;
  }

  for (let key in frequency) {
    if (frequency[key] > 1) {
      count += (frequency[key] * (frequency[key] - 1)) / 2;
    }
  }
  return count;
};

module.exports = { goodPairs };

const twoSum = (numbers, target) => {
  let left = 0;
  let right = numbers.length - 1;
  let result = [];

  while (left < right) {
    let sum = numbers[left] + numbers[right];
    if (sum === target) {
      result.push(left + 1);
      result.push(right + 1);
      return result;
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }
};

module.exports = { twoSum };

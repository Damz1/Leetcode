const binarySearch = (nums, target) => {
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    mid = Math.floor(left + (right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
};

module.exports = { binarySearch };

const maxArea = (height) => {
  let left = 0;
  let right = height.length - 1;
  let maxArea = 0;

  while (left < right) {
    let currentLeftHeight = height[left];
    let currentRightHeight = height[right];
    let distance = Math.abs(right - left);
    let newMaxArea = distance * Math.min(currentLeftHeight, currentRightHeight);

    if (currentLeftHeight < currentRightHeight) {
      left++;
    }
    if (currentRightHeight <= currentLeftHeight) {
      right--;
    }

    if (newMaxArea > maxArea) {
      maxArea = newMaxArea;
    }
  }
  return maxArea;
};

module.exports = { maxArea };

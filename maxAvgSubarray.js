const findMaxAverage = (nums, k) => {
  //calculate the sum of the first subarray
  let sum = 0;
  for (let i = 0; i < k; i++) {
    const element = nums[i];
    sum += element;
  }
  let maxSum = sum;
  let left = 0;
  let right = k;
  //while right pointer is not at the end
  while (right < nums.length) {
    //remove from the sum the left element and add the right to it.
    sum -= nums[left];
    sum += nums[right];
    //shift the window by 1 and update maxSum if needed.
    left++;
    right++;
    maxSum = Math.max(maxSum, sum);
  }

  return maxSum / k;
};

module.exports = { findMaxAverage };

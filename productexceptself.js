let productExceptSelf = function (nums) {
  //create an array of same length filled with 1's.
  let n = nums.length;
  let answer = new Array(n).fill(1);
  // Compute the left product for each number
  let leftProduct = 1;
  for (let i = 1; i < n; i++) {
    leftProduct *= nums[i - 1];
    answer[i] *= leftProduct;
  }

  // Compute the right product for each number and multiply it with the left product
  let rightProduct = 1;
  for (let i = n - 2; i >= 0; i--) {
    rightProduct *= nums[i + 1];
    answer[i] *= rightProduct;
  }

  return answer;
};

// Test
let nums = [1, 2, 3, 4];
console.log(productExceptSelf(nums)); // [24,12,8,6]

/*
Example 1:

Input: nums = [1,2,3,4]
Output: [24,12,8,6]

Example 2:

Input: nums = [-1,1,0,-3,3]
Output: [0,0,9,0,0]
*/

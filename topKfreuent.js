let topKFrequent = function (nums, k) {
  //create an object with keys of nums
  //count how many times each one appear

  const object = {};
  for (let num of nums) {
    if (object[num]) {
      object[num]++;
    } else {
      object[num] = 1;
    }
  }
  console.log(object);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
/*
Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
*/

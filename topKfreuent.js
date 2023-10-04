let topKFrequent = function (nums, k) {
  const countObj = {};
  for (let num of nums) {
    if (countObj[num]) {
      countObj[num]++;
    } else {
      countObj[num] = 1;
    }
  }
  console.log(countObj); // { '1': 3, '2': 2, '3': 1 }

  for (let key in countObj) {
    let maxValue = 0;
    if (countObj[key] > maxValue) {
      output = [countObj[key]];
    }
  }

  console.log("output", output);
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
/*
Example 1:

Input: nums = [1,1,1,2,2,3], k = 2
Output: [1,2]
*/

//create an object with how many times each key appears
//repeat k times:
//find the largest value and push its key to an array

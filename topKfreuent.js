let topKFrequent = function (nums, k) {
  //create an object to count how many times each number appears
  const countObj = {};
  for (let num of nums) {
    if (countObj[num]) {
      countObj[num]++;
    } else {
      countObj[num] = 1;
    }
  }

  //make that object an array of arrays
  let arrayCount = Object.entries(countObj);

  //sort it by value in descending order
  sortedCount = arrayCount.sort((a, b) => b[1] - a[1]);

  //slice the first k numbers of arrays
  slicedCount = sortedCount.slice(0, k);

  //map through it and return the first item of each inner array (the key in the object)
  mappedCount = slicedCount.map((item) => parseInt(item[0]));
  return mappedCount;
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

// .map(item => parseInt(item[0]));

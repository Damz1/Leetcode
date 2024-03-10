const divisorSubstrings = (num, k) => {
  let left = 0;
  let right = k - 1;
  let count = 0;
  let numString = String(num);

  while (right < numString.length) {
    let currNum = numString.substring(left, right + 1);
    if (currNum !== "0" && num % Number(currNum) === 0) {
      count++;
    }
    left++;
    right++;
  }
  return count;
};

module.exports = { divisorSubstrings };

/*
2269. Find the K-Beauty of a Number
The k-beauty of an integer num is defined as the number of substrings of num when it is read as a string that meet the following conditions:

It has a length of k.
It is a divisor of num.
Given integers num and k, return the k-beauty of num.

Note:

Leading zeros are allowed.
0 is not a divisor of any value.
A substring is a contiguous sequence of characters in a string.

 

Example 1:

Input: num = 240, k = 2
Output: 2
Explanation: The following are the substrings of num of length k:
- "24" from "240": 24 is a divisor of 240.
- "40" from "240": 40 is a divisor of 240.
Therefore, the k-beauty is 2
*/

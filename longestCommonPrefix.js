/**
 * @param {string[]} strs
 * @return {string}
 */

var longestCommonPrefix = function (strs) {
  if (!strs.length) return "";
  //sort the array of words
  strs.sort();

  //first and last word of the sorted array
  let first = strs[0];
  let last = strs[strs.length - 1];
  let prefix = "";

  //compare the first char in both, if equal add to prefix otherwise break and return prefix
  for (let i = 0; i < first.length; i++) {
    if (first[i] === last[i]) {
      prefix += first[i];
    } else {
      break;
    }
  }
  return prefix;
};

/*
14. Longest Common Prefix

Write a function to find the longest common prefix string amongst an array of strings.
If there is no common prefix, return an empty string "".

Example 1:
Input: strs = ["flower","flow","flight"]
Output: "fl"
Example 2:
Input: strs = ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings.
 
*/

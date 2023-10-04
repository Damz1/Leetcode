let groupAnagrams = function (strs) {
  let anagrams = {};

  for (let str of strs) {
    const sorted = [...str].sort().join("");
    if (anagrams[sorted]) {
      anagrams[sorted].push(str);
    } else {
      anagrams[sorted] = [str];
    }
  }

  return Object.values(anagrams);
};

console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]));

/*
Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
*/

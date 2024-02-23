const longestSubstring = (str) => {
  let subString = "";

  for (const char of str) {
    if (!subString.includes(char)) {
      subString = subString + char;
    }
  }
  return subString.length;
};

module.exports = { longestSubstring };

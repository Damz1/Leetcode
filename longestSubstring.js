const longestSubstring = (str) => {
  let maxLength = 0;
  let currentSubstring = "";

  for (const char of str) {
    const index = currentSubstring.indexOf(char);
    if (index !== -1) {
      currentSubstring = currentSubstring.slice(index + 1);
    }
    currentSubstring += char;

    maxLength = Math.max(maxLength, currentSubstring.length);
  }

  return maxLength;
};

module.exports = { longestSubstring };

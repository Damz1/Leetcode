const longestNiceSubstring = function (s) {
  let result = "";

  const isNice = (substring) => {
    const set = new Set(substring.split("")); // Create a set of unique characters in the substring

    // Check if both the uppercase and lowercase versions of the character exist in the set
    for (let char of set) {
      if (!set.has(char.toUpperCase()) || !set.has(char.toLowerCase())) {
        return false;
      }
    }
    return true;
  };

  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substring = s.substring(i, j); // Extract the current substring

      // Check if the substring is nice and longer than the current result
      if (isNice(substring) && substring.length > result.length) {
        result = substring;
      }
    }
  }

  return result;
};

module.exports = { longestNiceSubstring };

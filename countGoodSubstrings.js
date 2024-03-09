const countGoodSubstrings = (s) => {
  let count = 0;
  for (let i = 2; i < s.length; i++) {
    if (isGoodString(s[i], s[i - 1], s[i - 2])) {
      count++;
    }
  }
  return count;
};

const isGoodString = (char1, char2, char3) => {
  if (char1 !== char2 && char2 !== char3 && char1 !== char3) {
    return true;
  }
  return false;
};

module.exports = { countGoodSubstrings };

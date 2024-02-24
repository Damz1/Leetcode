const isPalindrome = (str) => {
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();

  let reversedStr = cleanStr.split("").reverse().join("");

  return cleanStr === reversedStr;
};

module.exports = { isPalindrome };

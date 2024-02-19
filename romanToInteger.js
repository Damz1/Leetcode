let romanToInt = function (s) {
  const romanNumerals = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let array = s.split("");
  let sum = 0;

  for (let char of s) {
    sum += romanNumerals[char];
  }
  return sum;
};

module.exports = { romanToInt };

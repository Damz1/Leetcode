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

  let sum = 0;
  let previousValue = 0;

  for (let i = 0; i < s.length; i++) {
    let currentChar = s[i];
    let currentValue = romanNumerals[currentChar];

    if (currentValue > previousValue) {
      sum += currentValue - 2 * previousValue;
    } else {
      sum += romanNumerals[currentChar];
    }

    previousValue = currentValue;
  }
  return sum;
};

module.exports = { romanToInt };

const equalFrequency = (word) => {
  let frequency = {};
  for (char of word) {
    frequency[char] = (frequency[char] || 0) + 1;
  }
  //frequency = { a: 1, b: 1, c: 2 }
  let differeceCount = 0;
  let arrayFreq = Object.entries(frequency); //[ [ 'a', 1 ],[ 'b', 1 ],[ 'c', 2 ] ]

  for (let i = 1; i < arrayFreq.length; i++) {
    const firstElement = arrayFreq[0][1];
    if (arrayFreq[i][1] > firstElement) {
      differeceCount += arrayFreq[i][1] - firstElement;
    } else if (arrayFreq[i][1] < firstElement) {
      differeceCount += firstElement - arrayFreq[i][1];
    }
  }
  if (differeceCount > 1) {
    return false;
  }
  return true;
};

module.exports = { equalFrequency };

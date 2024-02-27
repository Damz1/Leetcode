const equalFrequency = (word) => {
  let frequency = {};
  for (const char of word) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  //create an array of frequencies
  const counts = Object.values(frequency);
  //create a uniqe set of those values
  const uniqueCounts = new Set(counts);

  //if there is only 1 value that is 1, return true
  if (uniqueCounts.size === 1 && counts.length === 1) {
    return true;
  }

  //if there are more then 2 values in the uniqe set, we cant equalize
  if (uniqueCounts.size > 2) {
    return false;
  }

  const [minCount, maxCount] = Array.from(uniqueCounts).sort((a, b) => a - b);
  const minCountFrequency = counts.filter((count) => count === minCount).length;
  const maxCountFrequency = counts.filter((count) => count === maxCount).length;

  //expect(equalFrequency("abc")).toBe(true);
  if (minCount === 1 && uniqueCounts.size === 1) {
    return true;
  }

  // If there is only one character with a lower frequency and it occurs only once, or
  // if there is only one character with a higher frequency and removing one occurrence of that character can equalize the frequencies
  if (
    (minCount === 1 && minCountFrequency === 1 && minCount !== maxCount) ||
    (maxCount - minCount === 1 && maxCountFrequency === 1)
  ) {
    return true;
  }

  return false;
};

module.exports = { equalFrequency };

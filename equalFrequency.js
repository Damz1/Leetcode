const equalFrequency = (word) => {
  let frequency = {};
  for (const char of word) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  const counts = Object.values(frequency);
  const maxCount = Math.max(...counts);
  const minCount = Math.min(...counts);

  const maxCountFrequency = counts.filter((count) => count === maxCount).length;
  const minCountFrequency = counts.filter((count) => count === minCount).length;

  if (maxCount === minCount && maxCount === 1) {
    return true;
  }

  if (
    (maxCount - minCount === 1 && maxCountFrequency === 1) ||
    (minCount === 1 && minCountFrequency === 1)
  ) {
    return true;
  }

  return false;
};

module.exports = { equalFrequency };

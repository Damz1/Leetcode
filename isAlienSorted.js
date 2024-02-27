function isAlienSorted(words, order) {
  const dict = new Map();
  for (let i = 0; i < order.length; i++) {
    dict.set(order[i], i);
  }

  for (let i = 0; i < words.length - 1; i++) {
    const word1 = words[i];
    const word2 = words[i + 1];
    let j = 0;
    while (j < word1.length && j < word2.length) {
      if (dict.get(word1[j]) < dict.get(word2[j])) {
        break;
      } else if (dict.get(word1[j]) > dict.get(word2[j])) {
        return false;
      }
      j++;
    }
    if (j === word2.length && j < word1.length) {
      return false;
    }
  }
  return true;
}

module.exports = { isAlienSorted };

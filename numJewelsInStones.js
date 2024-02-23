let numJewelsInStones = function (jewels, stones) {
  //iterate over stones string. and check if it exists in jewels. if yes increment by 1

  let sum = 0;

  for (let i = 0; i < stones.length; i++) {
    const element = stones[i];
    if (jewels.includes(element)) {
      sum++;
    }
  }

  return sum;
};

module.exports = { numJewelsInStones };

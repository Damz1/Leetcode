const maxProfit = function (prices) {
  if (prices.length <= 1) {
    return 0; // If there's only one price or no price, we cannot make any profit
  }

  let minPrice = prices[0]; // Initialize minPrice to the first price
  let maxProfit = 0; // Initialize maxProfit to 0
  console.log(minPrice, maxProfit);

  for (let i = 1; i < prices.length; i++) {
    minPrice = Math.min(minPrice, prices[i]);

    maxProfit = Math.max(maxProfit, prices[i] - minPrice);
    console.log(minPrice, prices[i], maxProfit);
  }

  return maxProfit;
};

// Example usage:
const prices = [7, 1, 5, 3, 6, 4];
console.log(maxProfit(prices)); // Output: 5

module.exports = { maxProfit };

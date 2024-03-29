const isPowerOfTwo = (n) => {
  if (n <= 0) {
    return false;
  }
  return (n & (n - 1)) === 0;
};

module.exports = { isPowerOfTwo };

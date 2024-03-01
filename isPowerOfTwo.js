const isPowerOfTwo = (n) => {
  if (n <= 0) {
    return false;
  }
  return (n & (n - 1)) === 0;

  //return true if 2 ** x  = n

  let value = 16;

  let x = Math.log2(value);

  console.log(2 ** value);
};

module.exports = { isPowerOfTwo };

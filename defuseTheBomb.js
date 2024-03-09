function decrypt(code, k) {
  const decrypted = new Array(code.length).fill(0);

  // Iterate over each element of the code array
  for (let i = 0; i < code.length; i++) {
    if (k > 0) {
      for (let j = 1; j <= k; j++) {
        // Iterate over the next k elements
        decrypted[i] += code[(i + j) % code.length];
        // Sum the next k elements, wrap around if needed
      }
    } else if (k < 0) {
      for (let j = -1; j >= k; j--) {
        // Iterate over the previous k elements
        decrypted[i] += code[(i + j + code.length) % code.length];
        // Sum the previous k elements, wrap around if needed
      }
    }
  }

  return decrypted;
}

module.exports = { decrypt };

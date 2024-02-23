const finalValueAfterOperations = (operations) => {
  let sum = 0;

  for (const item of operations) {
    for (let i = 0; i < item.length; i++) {
      const currElement = item[i];
      const nextElement = item[i + 1];
      if (currElement === "-" && nextElement === "-") {
        sum--;
      } else if (currElement === "+" && nextElement === "+") {
        sum++;
      }
    }
  }
  return sum;
};

module.exports = { finalValueAfterOperations };

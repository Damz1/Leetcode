const maxDepthParentheses = (s) => {
  let count = 0;
  let maxCount = 0;
  let stack = [];

  for (let i = 0; i < s.length; i++) {
    let char = s[i];

    if (char === "(") {
      stack.push(char);
      count++;
    }

    //if current count is larger than maxCount update maxCount
    maxCount = count > maxCount ? count : maxCount;

    if (char === ")") {
      if (stack.length === 0) {
        return -1;
      } else {
        stack.pop();
        count--;
      }
    }
  }

  if (count === 0) {
    return maxCount;
  }
  return -1;
};

let s = "(1)+((2))+(((3)))";
// Output: 3

console.log(maxDepthParentheses(s));

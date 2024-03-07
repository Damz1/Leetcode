const removeOuterParentheses = (s) => {
  let count = 0;
  let result = "";

  for (let i = 0; i < s.length; i++) {
    const char = s[i];

    if (char === "(") {
      count++;
    } else if (char === ")") {
      count--;
    }

    //if the condition is met it must be the outer one so skip, otherwise append it to result.
    if ((char === "(" && count === 1) || (char === ")" && count === 0)) {
      continue;
    } else {
      result += char;
    }
  }

  return result;
};

let input = "(()())(())";
console.log(removeOuterParentheses(input));

/*
Input: s = "(()())(())"
Output: "()()()"

Input: s = "(()())(())(()(()))"
Output: "()()()()(())"
*/

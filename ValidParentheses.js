const isValid = (s) => {
  const stack = [];

  const map = new Map();
  map.set("(", ")");
  map.set("[", "]");
  map.set("{", "}");

  //iterate over the input
  for (let i = 0; i < s.length; i++) {
    const char = s[i];
    //iterate over the map
    for (let [key, value] of map) {
      //if the current char is an opening symbol
      if (key === char) {
        //push it's closing pair to the stack
        stack.push(value);
        //if the current char is a closing symbol
      } else if (value === char) {
        //check if it's the same as last item in the stack
        if (char === stack.at(-1)) {
          //if it is, pop the item
          stack.pop();
        } else {
          return false;
        }
      }
    }
  }
  //if the stack is empty after the loop, everything is valid
  if (stack.length === 0) {
    return true;
  }
  return false;
};

module.exports = { isValid };

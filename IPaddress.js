const defandIPaddr = (address) => {
  let arr = address.split("");
  let arrResult = [];

  for (let i of arr) {
    if (i === ".") {
      arrResult.push("[.]");
    } else {
      arrResult.push(i);
    }
  }
  let result = arrResult.join("");
  return result;
};

module.exports = { defandIPaddr };

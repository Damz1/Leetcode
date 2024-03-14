const minimumSum = function (num) {
  let string = String(num);
  let array = string.split("");
  array.sort();
  let join = array.join("");
  let first = Number(join[0] + join[1]);
  let second = Number(join[2] + join[3]);
  return;
};

console.log(minimumSum(2934));

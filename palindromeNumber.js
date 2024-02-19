var isPalindrome = function (x) {
  let stringNum = String(x);
  let arrNum = stringNum.split("");
  let reversedArr = [];

  for (let i = stringNum.length - 1; i >= 0; i--) {
    reversedArr.push(arrNum[i]);
  }
  let reversedString = reversedArr.join("");

  return stringNum === reversedString ? true : false;
};

console.log(isPalindrome(121));

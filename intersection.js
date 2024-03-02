const intersection = (nums1, nums2) => {
  let sortedNums1 = nums1.sort((a, b) => a - b);
  let sortedNums2 = nums2.sort((a, b) => a - b);

  let lengthOfShortesArray =
    sortedNums1 < sortedNums2 ? sortedNums1.length : sortedNums2.length;
  if (lengthOfShortesArray === 0) {
    return [];
  }

  let pointer1 = 0;
  let pointer2 = 0;
  let result = [];

  while (pointer1 < lengthOfShortesArray && pointer2 < lengthOfShortesArray) {
    if (sortedNums1[pointer1] === sortedNums2[pointer2]) {
      if (!result.includes(sortedNums1[pointer1])) {
        result.push(sortedNums1[pointer1]);
      }
      pointer1++;
      pointer2++;
    } else if (sortedNums1[pointer1] < sortedNums2[pointer2]) {
      pointer1++;
    } else {
      pointer2++;
    }
  }
  return result;
};

module.exports = { intersection };

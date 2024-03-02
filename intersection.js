const intersection = (nums1, nums2) => {
  let sortedNums1 = nums1.sort((a, b) => a - b);
  let sortedNums2 = nums2.sort((a, b) => a - b);

  if (!nums1.length || !nums2.length) {
    return [];
  }

  let pointer1 = 0;
  let pointer2 = 0;
  let result = [];

  while (pointer1 < sortedNums1.length && pointer2 < sortedNums2.length) {
    if (sortedNums1[pointer1] < sortedNums2[pointer2]) {
      pointer1++;
    } else if (sortedNums1[pointer1] > sortedNums2[pointer2]) {
      pointer2++;
    } else {
      result.push(sortedNums1[pointer1]);
      pointer1++;
      pointer2++;
    }
  }
  return [...new Set(result)];
};

module.exports = { intersection };

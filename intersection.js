const intersection = (nums1, nums2) => {
  let result = [];

  for (let i = 0; i < nums1.length; i++) {
    for (let j = 0; j < nums2.length; j++) {
      if (nums1[i] == nums2[j]) {
        result.push(nums1[i]);
        break;
      }
    }
  }
  return [...new Set(result)];
};

module.exports = { intersection };

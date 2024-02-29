const mergeTwoLists = (list1, list2) => {
  if (!list1.length && !list2.length) {
    return [];
  }
  if (!list1.length || !list2.length) {
    return list1.length ? list1 : list2;
  }
};

module.exports = { mergeTwoLists };

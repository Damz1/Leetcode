const mergeTwoLists = (list1, list2) => {
  if (!list1.length && !list2.length) {
    return [];
  }
  if (!list1.length || !list2.length) {
    return list1.length ? list1 : list2;
  }

  let smallerList = list1.length < list2.length ? list1 : list2;
  let largerList = list1.length > list2.length ? list1 : list2;

  //cut the longest array to be same size as shorter. will be appended later to the result.
  let restOfLargerArray;
  if (list1.length !== list2.length) {
    restOfLargerArray = largerList.splice(
      smallerList.length - largerList.length
    );
  }

  let mergeList = [];

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < smallerList.length) {
    if (list1[pointer1] !== undefined && list2[pointer2] !== undefined) {
      if (list1[pointer1] < list2[pointer2]) {
        mergeList.push(list1[pointer1]);
        pointer1++;
      } else if (list1[pointer1] > list2[pointer2]) {
        mergeList.push(list2[pointer2]);
        pointer2++;
      } else {
        mergeList.push(list1[pointer1]);
        mergeList.push(list2[pointer2]);
        pointer1++;
        pointer2++;
      }
    } else if (list1[pointer1] !== undefined) {
      mergeList.push(list1[pointer1]);
      pointer1++;
    } else if (list2[pointer2] !== undefined) {
      mergeList.push(list2[pointer2]);
      pointer2++;
    }
  }

  console.log("mergeList", mergeList);

  if (typeof restOfLargerArray === undefined) {
    return mergeList;
  } else {
    return mergeList.concat(restOfLargerArray);
  }
};

module.exports = { mergeTwoLists };

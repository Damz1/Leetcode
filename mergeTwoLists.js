const mergeTwoLists = (list1, list2) => {
  if (!list1.length && !list2.length) {
    return [];
  }
  if (!list1.length || !list2.length) {
    return list1.length ? list1 : list2;
  }

  let mergeList = [];
  //[1,2,4], [1,2,2]
  //   ^        ^
  //have length of each list and check which is smaller
  let n1 = list1.length;
  let n2 = list2.length;
  //start with left pointer in each list
  let pointer1 = 0;
  let pointer2 = 0;
  //while right is less then smaller length list.
  let smallerList = n1 < n2 ? n1 : n2;
  while (pointer2 < smallerList) {
    //if the left is smaller
    if (list1[pointer1] < list2[pointer2]) {
      mergeList.push(list1[pointer1]);
      //push the left
      //left++
      pointer1++;
      //if the right is smaller
    } else if (list1[pointer1] > list2[pointer2]) {
      mergeList.push(list2[pointer2]);
      pointer2++;
      //push the right
      //right++
    } else {
      mergeList.push(list1[pointer1]);
      mergeList.push(list2[pointer2]);
      pointer1++;
      pointer2++;
    }
    //if equal,
    //push left into result array and push right into result array
    //right++
    //left++
  }
  return mergeList;
  //after the loop return the merge array
};

module.exports = { mergeTwoLists };

const mergeTwoLists = function (list1, list2) {
  //if one of the heads are null return the other
  if (!list1 || !list2) {
    return list1 ? list1 : list2;
  }

  let mergedList = new ListNode();
  let current1 = list1;
  let current2 = list2;
  let current3 = mergedList;

  while (current1 && current2) {
    //if val in 1 is smaller. append it to 3 and move it's pointer by one
    if (current1.val <= current2.val) {
      current3.next = current1;
      current1 = current1.next;
    } else {
      //if val in 2 is smaller. append it to 3 and move it's pointer by one
      current3.next = current2;
      current2 = current2.next;
    }
    //in both ways, move the pointer of the merged list by 1
    current3 = current3.next;
  }

  //if one of the lists is still true, append it to the merged list
  current3.next = current1 ? current1 : current2;

  return mergedList.next;
};

const getIntersectionNode = function (headA, headB) {
  let currentA = headA;
  let currentB = headB;

  while (currentA) {
    while (currentB) {
      if (currentA === currentB) {
        return currentA;
      }
      currentB = currentB.next;
    }
    currentA = currentA.next;
  }
  return null;
};

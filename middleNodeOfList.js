var middleNode = function (head) {
  let slow = head;
  let fast = head;

  //when either fast or fast.next will be null
  //the slow pointer will be in the middle node (or second middle in case of an even list)
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};

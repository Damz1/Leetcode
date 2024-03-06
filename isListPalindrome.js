//a function that returns the middle node of a linked list
const middleNode = function (head) {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }
  return slow;
};
//a function that returns the head of a new reversed linked list
const reverseList = function (head) {
  let current = head;
  let prev = null;

  while (current) {
    let next = current.next;
    current.next = prev;
    prev = current;
    current = next;
  }
  return prev;
};
//a function that compares two lists and return boolean if all values are the same in both
const isListSame = function (head1, head2) {
  while (head1 && head2) {
    if (head1.val !== head2.val) {
      return false;
    }
    head1 = head1.next;
    head2 = head2.next;
  }
  return true;
};

const isListPalindrome = (head) => {
  let mid = middleNode(head);
  let reversedSecondHalf = reverseList(mid);
  return isListSame(head, reversedSecondHalf);
};

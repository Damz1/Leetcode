const hasCycle = function (head) {
  if (!head) return false;
  if (!head.next) return false;

  slow = head;
  fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
    if (slow === fast) {
      return true;
    }
  }
  return false;
};

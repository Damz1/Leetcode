const deleteDuplicates = (head) => {
  if (!head) return null;

  let prev = head;
  let curr = head.next;

  while (prev && curr) {
    if (curr.val === prev.val) {
      prev.next = curr.next;
    } else {
      prev = curr;
    }
    curr = curr.next;
  }
  return head;
};

/*
iterate over the list keeping track of current and previous nodes
if they have the same value => make the previous pointer point to the next one, (instead of the current.)
otherwise, move previous pointer one forwad.
in both cases move current one forwad.
repeate untill a pointer is null
*/

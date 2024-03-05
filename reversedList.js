const reverseList = function (head) {
  let current = head;
  let prev = null;

  //iterate as long as current is not null
  while (current) {
    let next = current.next; //store the current next to not lost access to it
    current.next = prev; //make the next one be the previous one
    prev = current; //move the pointer to the previous one to the right
    current = next; //move the current pointer one to the right
  }
  return prev; //when current is null. return the tail of the original list
};

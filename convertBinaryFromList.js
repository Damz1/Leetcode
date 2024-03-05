/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {number}
 */

var getDecimalValue = function (head) {
  const result = [];
  let current = head;

  //while current is not null iterate and push every value to the array
  while (current) {
    result.push(current.val);
    current = current.next;
  }

  //join the array and parse it to a decimal number
  return parseInt(result.join(""), 2);
};

// Define a ListNode class representing a node in a linked list
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val; // Value of the node
  this.next = next === undefined ? null : next; // Reference to the next node
}

// Function to merge two sorted linked lists
const mergeTwoLists = function (list1, list2) {
  // If both lists are empty, return null
  if (!list1 && !list2) {
    return null;
  }

  // If one of the lists is empty, return the other list
  if (!list1 || !list2) {
    return !list1 ? list2 : list1;
  }

  // Initialize a dummy head node for the merged list
  let mergedList = new ListNode(0);
  let current = mergedList; // Initialize a current pointer for iteration

  // Iterate through both lists until one of them reaches the end
  while (list1 !== null && list2 !== null) {
    // Compare the values of the current nodes of both lists
    if (list1.val < list2.val) {
      current.next = list1; // Link the smaller node to the merged list
      list1 = list1.next; // Move to the next node in list1
    } else {
      current.next = list2; // Link the smaller node to the merged list
      list2 = list2.next; // Move to the next node in list2
    }
    current = current.next; // Move the current pointer to the newly added node
  }

  // Add the remaining nodes from the non-empty list to the merged list
  if (list1 !== null) {
    current.next = list1;
  } else {
    current.next = list2;
  }

  // Return the merged list (dummyHead.next points to the actual head of the merged list)
  return mergedList.next;
};

// Example of creating two sorted linked lists
const list1 = new ListNode(1);
list1.next = new ListNode(2);
list1.next.next = new ListNode(4);

const list2 = new ListNode(1);
list2.next = new ListNode(3);
list2.next.next = new ListNode(4);

// Call mergeTwoLists function with the two lists
const mergedList = mergeTwoLists(list1, list2);

// Print the merged list values to the console
let current = mergedList;
let result = [];
while (current !== null) {
  result.push(current.val);
  current = current.next;
}
console.log(result);

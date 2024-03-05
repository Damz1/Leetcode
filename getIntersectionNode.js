const getIntersectionNode = function (headA, headB) {
  //create a function to get the length of each list
  const getLength = (head) => {
    let length = 0;
    let current = head;
    while (current) {
      length++;
      current = current.next;
    }
    return length;
  };
  let lengthA = getLength(headA);
  let lengthB = getLength(headB);

  let currentA = headA;
  let currentB = headB;

  //move the pointer of the longest list by the differnce between the lists
  while (lengthA > lengthB) {
    lengthA--;
    currentA = currentA.next;
  }

  while (lengthB > lengthA) {
    lengthB--;
    currentB = currentB.next;
  }

  //now pointers are both the same distance from the intersecion, keep moving by one untill condition is falsy
  while (currentA !== currentB) {
    currentA = currentA.next;
    currentB = currentB.next;
  }
  return currentA;
};

//brute force nested loop:

//   let currentA = headA;
//   let currentB = headB;

//   while (currentA) {
//     while (currentB) {
//       if (currentA === currentB) {
//         return currentA;
//       }
//       currentB = currentB.next;
//     }
//     currentA = currentA.next;
//   }
//   return null;

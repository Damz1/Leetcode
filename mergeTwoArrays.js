const mergeTwoarrays = (array1, array2) => {
  if (!array1.length && !array2.length) {
    return [];
  }
  if (!array1.length || !array2.length) {
    return array1.length ? array1 : array2;
  }

  let smallerarray = array1.length < array2.length ? array1 : array2;
  let largerarray = array1.length > array2.length ? array1 : array2;

  //cut the longest array to be same size as shorter. will be appended later to the result.
  let restOfLargerArray;
  if (array1.length !== array2.length) {
    restOfLargerArray = largerarray.splice(
      smallerarray.length - largerarray.length
    );
  }

  let mergearray = [];

  let pointer1 = 0;
  let pointer2 = 0;

  while (pointer2 < smallerarray.length) {
    if (array1[pointer1] !== undefined && array2[pointer2] !== undefined) {
      if (array1[pointer1] < array2[pointer2]) {
        mergearray.push(array1[pointer1]);
        pointer1++;
      } else if (array1[pointer1] > array2[pointer2]) {
        mergearray.push(array2[pointer2]);
        pointer2++;
      } else {
        mergearray.push(array1[pointer1]);
        mergearray.push(array2[pointer2]);
        pointer1++;
        pointer2++;
      }
    } else if (array1[pointer1] !== undefined) {
      mergearray.push(array1[pointer1]);
      pointer1++;
    } else if (array2[pointer2] !== undefined) {
      mergearray.push(array2[pointer2]);
      pointer2++;
    }
  }

  if (typeof restOfLargerArray === undefined) {
    return mergearray;
  } else {
    return mergearray.concat(restOfLargerArray);
  }
};

module.exports = { mergeTwoarrays };

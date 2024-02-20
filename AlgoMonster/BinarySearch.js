function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (arr[mid] === target) {
      return mid;
    } else if (arr[mid] < target) {
      left = mid + 1;
    } else if (arr[mid] > target) {
      right = mid - 1;
    }
  }
  return -1;
}

function binaryBoolean(arr) {
  //find the index of the first true value.
  let left = 0;
  let right = arr.length - 1;
  let indexOfFirstTrue = -1;

  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);

    if (!arr[mid]) {
      left = mid + 1;
    } else if (arr[mid]) {
      indexOfFirstTrue = mid;
      right = mid - 1;
    }
  }
  return indexOfFirstTrue;
}

module.exports = { binarySearch, binaryBoolean };

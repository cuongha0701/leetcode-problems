/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  if (
    arr.length < 3 ||
    arr[0] >= arr[1] ||
    arr[arr.length - 2] <= arr[arr.length - 1]
  ) {
    return false;
  }

  let left = 0;
  let right = arr.length - 1;
  while (arr[left] < arr[left + 1]) left++;
  while (arr[right - 1] > arr[right]) right--;
  return left === right;
};

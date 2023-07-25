/**
 * @param {number[]} arr
 * @return {boolean}
 */
var validMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < arr.length - 1 && arr[left] < arr[left + 1]) left++;
  while (right > 0 && arr[right - 1] > arr[right]) right--;
  return left > 0 && left === right && right < arr.length - 1;
};

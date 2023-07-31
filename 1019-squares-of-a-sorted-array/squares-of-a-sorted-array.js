/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortedSquares = function (nums) {
  let result = [];

  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    let leftSquare = nums[left] * nums[left];
    let rightSquare = nums[right] * nums[right];

    if (leftSquare > rightSquare) {
      result.unshift(leftSquare);
      left++;
    } else {
      result.unshift(rightSquare);
      right--;
    }
  }

  return result;
};

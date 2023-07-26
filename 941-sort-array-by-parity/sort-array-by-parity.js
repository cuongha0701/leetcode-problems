/**
 * @param {number[]} nums
 * @return {number[]}
 */
var sortArrayByParity = function(nums) {
    let pos = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0) {
      const numPos = nums[pos];
      nums[pos] = nums[i];
      nums[i] = numPos;
      pos++;
    }
  }
  return nums;
};
/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  const counts = new Array(101).fill(0);
  const output = new Array(heights.length);
  for (let i = 0; i < heights.length; i++) counts[heights[i]]++;
  for (let i = 1; i < counts.length; i++) counts[i] += counts[i - 1];

  for (let i = 0; i < heights.length; i++) {
    output[counts[heights[i]] - 1] = heights[i];
    counts[heights[i]]--;
  }

  let result = 0;
  for (let i = 0; i < heights.length; i++) {
    if (heights[i] !== output[i]) {
      result++;
    }
  }
  return result;
};

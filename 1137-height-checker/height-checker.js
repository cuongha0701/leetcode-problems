/**
 * @param {number[]} heights
 * @return {number}
 */
var heightChecker = function (heights) {
  let map = new Array(101).fill(0);

  for (let i = 0; i < heights.length; i++) {
    map[heights[i]]++;
  }

  let num = 1;
  let result = 0;

  for (let j = 0; j < heights.length; j++) {
    while (!map[num]) {
      console.log(num, j);
      num++;
    }
    if (heights[j] !== num) result++;
    map[num]--;
  }
  return result;
};

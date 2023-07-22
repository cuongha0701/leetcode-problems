/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let zeroes = arr.reduce(
    (accumulator, currentValue) =>
      currentValue === 0 ? ++accumulator : accumulator,
    0
  );
  let n = arr.length;

  for (let i = arr.length - 1; i >= 0; i--) {
    if (i + zeroes < n) {
      arr[i + zeroes] = arr[i];
    }

    if (arr[i] == 0) {
      zeroes -= 1;
      if (i + zeroes < n) {
        arr[i + zeroes] = 0;
      }
    }
  }
};

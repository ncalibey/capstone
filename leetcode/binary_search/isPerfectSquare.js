var isPerfectSquare = function(num) {
  let left = 1;
  let right = num;

  while (left + 1 < right) {
    const mid = Math.floor(left + (right - left) / 2);
    const val = Math.pow(mid, 2);

    if (val === num) {
      return true;
    } else if (val < num) {
      left = mid;
    } else if (val > num) {
      right = mid;
    }
  }

  return num === 1;
};

console.log(isPerfectSquare(16));
console.log(isPerfectSquare(14));

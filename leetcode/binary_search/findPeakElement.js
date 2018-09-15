/*
  Perform a binary search. If mid's neighbors are both less, then return it.
  If it has a neighbor larger to the right, then go right, otherwise go left.
  If the midpoint value is either `0` or `arr.l - 1`, make sure that the other
  values are -INFINITY
*/
var findPeakElement = function(nums) {
  function getMidpointNeighbors(mid) {
    let left = mid - 1;
    let right = mid + 1;

    if (nums[left] === undefined) left = -Infinity;
    if (nums[right] === undefined) right = -Infinity;

    return [nums[left], nums[right]];
  }

  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    const mid = Math.floor(left + (right - left) / 2);
    const midVal = nums[mid];
    const [leftOfMid, rightOfMid] = getMidpointNeighbors(mid);

    if (midVal > leftOfMid && midVal > rightOfMid) {
      return mid;
    } else if (midVal < rightOfMid) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return left;
}

console.log(findPeakElement([1,2,3,1]));
console.log(findPeakElement([1,2,1,3,5,6,4]));
console.log(findPeakElement([1,2,1,3,5,6,7]));
console.log(findPeakElement([2,1,1,3,3,3,3]));

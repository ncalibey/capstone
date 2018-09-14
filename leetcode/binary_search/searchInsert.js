/*
  Do a binary search. At the end, if the upper is less than the target, the
  element is inserted at the end of the array. If it <= to the lower bound,
  then it's inserted at the lower bound. If it is > the lower bound (but < than
  the upper bound), then it is inserted at 1 past the lower bound.

  I derived this mainly by writing out the results of multiple test cases on a
  white board, and then analyzing the relationship between the answers and the
  upper and lower bounds.
*/


var searchInsert = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  if (nums[right] < target) {
    return right + 1;
  } else if (nums[left] >= target) {
    return left
  } else if (nums[left] < target) {
    return left + 1;
  }
}

console.log(searchInsert([1,3,5,6], 5) === 2);
console.log(searchInsert([1,3,5,6], 2) === 1);
console.log(searchInsert([1,3,5,6], 7) === 4);
console.log(searchInsert([1,3,5,6], 0) === 0);
console.log(searchInsert([1], 0) === 0);
console.log(searchInsert([5], 5) === 0);
console.log(searchInsert([1], 2) === 1);
console.log(searchInsert([1, 3], 0) === 0);

/*
  if rightVal > leftVal (before we do any loops), then do a normal binary search

  - check mid and left
    - if it's ordered, check if target is between them
      - if it is, search it
      - else search right
  -

*/

var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    const mid = Math.floor(left + (right - left) / 2);
    const midVal = nums[mid];

    if (midVal === target) {
      return mid;
    } else if (midval > target && target > nums[left]) {
      right = mid;
    } else {
      left = mid;
    }
  }

  if (nums[left] === target) {
    return left;
  } else if (nums[right] === target) {
    return right;
  }

  return -1;
};

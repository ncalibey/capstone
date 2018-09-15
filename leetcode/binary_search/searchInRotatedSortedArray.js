/*
  if rightVal > leftVal (before we do any loops), then do a normal binary search

  - check mid and left
    - if it's ordered, check if target is between them
      - if it is, search it
      - else search right

  Runtime: O(log N)
  Space: O(1)
*/

var search = function(nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    const mid = Math.floor(left + (right - left) / 2);
    const midVal = nums[mid];

    if (midVal === target) {
      return mid;
    } else if (midVal > nums[left]) {
      if (target >= nums[left] && target < midVal) {
        right = mid
      } else {
        left = mid;
      }
    } else {
      if (target <= nums[right] && target > midVal) {
        left = mid;
      } else {
        right = mid;
      }
    }
  }

  if (nums[left] === target) {
    return left;
  } else if (nums[right] === target) {
    return right;
  }

  return -1;
};

console.log(search([4,5,6,7,0,1,2], 0));
console.log(search([4,5,6,7,0,1,2], 3));
console.log(search([4,5,6,7,0,1,2], 7));
console.log(search([], 0));

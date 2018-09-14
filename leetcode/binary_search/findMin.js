/*
  check the middle element
    - if it is less than mid - 1, then return it
      - else if nums[mid] > nums[right]
        - search right half
      - else
        - search left half
  edge cases:
    - 2 size array
      - just compare values and return the minimum


*/

var findMin = function(nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    const mid = Math.floor(left + (right - left) / 2);
    const midVal = nums[mid];

    if (midVal < nums[mid - 1]) {
      return midVal;
    } else if (midVal > nums[right]) {
      left = mid;
    } else {
      right = mid;
    }
  }

  return Math.min(nums[right], nums[left]);
}

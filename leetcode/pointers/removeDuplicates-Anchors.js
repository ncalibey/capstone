/*
  Input: Array of sorted numbers
  Output: Unique array of sorted numbers

  - anchor/runner where the runner will splice all of the duplicates out
  - Runtime: O(N^2)
*/

var removeDuplicates = function(nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length;) {
      if (nums[i] === nums[j]) {
        nums.splice(j, 1);
      } else {
        j++;
      }
    }
  }

  return nums.length;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([1,1,2]));

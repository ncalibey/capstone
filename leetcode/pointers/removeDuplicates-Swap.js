/*
  Based upon LeetCode solution
*/
var removeDuplicates = function(nums) {
  let i = 0;

  for (let j = 0; j < nums.length; ) {
    if (nums[i] === nums[j]) {
      j++;
    } else {
      nums[i + 1] = nums[j];
      i++;
    }
  }

  return i + 1;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([1,1,2]));

/*
  Input: Array of sorted numbers
  Output: Unique array of sorted numbers

  Brute Force:
    - anchor/runner where the runner will splice all of the duplicates out
    - Runtime: O(N^2)

  Hash Table:
    - create a Hash Table
    - increment through
      - if arr[i] is in the hash table, then splice it out, otherwise add it with a value of `true`
      - only increment `i` if we didn't splice something out!
    - Runtime: O(N^2)
    - Size: O(N^2)
*/

var removeDuplicates = function(nums) {
  let seenNums = {};

  for (let i = 0; i < nums.length;) {
    num = nums[i];

    if (seenNums[num]) {
      nums.splice(i, 1);
    } else {
      seenNums[num] = true;
      i++;
    }
  }

  return nums.length;
};

console.log(removeDuplicates([0,0,1,1,1,2,2,3,3,4]));
console.log(removeDuplicates([1,1,2]));

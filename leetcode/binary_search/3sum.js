/*
  Found this mental model on LeetCode. The idea is that you iterate over the
  array once and perform a binary search to find matching elements. If a match
  is found, you increment `l` and decrement `r` until the next/prev value is
  not equal (and then you increment/decrement again as you do on every loop).
  This means you have to sort the array first, but that's okay since that's only
  O(n log n).

  If the sum of the values is less than 0, `l` goes up, otherwise `r` goes up.

  Time: O(N^2)
  Space: O(1)
*/
var threeSum = function(nums) {
  const triplets = [];

  nums.sort((a, b) => a - b);

  for (let i = 0; i < nums.length - 2; i += 1) {
    if (i == 0 || nums[i] != nums[i - 1]) {
      let l = i + 1;
      let r = nums.length - 1

      while (l < r) {
        const sum = nums[l] + nums[r] + nums[i];

        if (sum === 0) {
          triplets.push([nums[i], nums[l], nums[r]]);

          while (nums[l] === nums[l + 1]) {
            l += 1;
          }

          while (nums[r] === nums[r - 1]) {
            r -= 1;
          }

          l += 1;
          r -= 1;
        } else if (sum < 0) {
          l += 1;
        } else {
          r -= 1;
        }
      }
    }
  }

  return triplets;
}

console.log(threeSum([-1,0,1,2,-1,-4]));
console.log(threeSum([-1, 0, 1, 1, 1]));

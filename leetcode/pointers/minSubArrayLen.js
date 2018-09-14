/*
  Uses a two pointers method; taken from solution 4 on LeetCode. While I did
  come up with a solution on my own, it was brute force and quite bad, and so
  I used the two pointer algorithm so I could study and understand it. After
  the code there is a visual display of how the pointers work, and how `ans`
  keeps track of the smallest array size.

  Runtime is O(N); Space complexity is O(1)
*/
var minSubArrayLen = function(s, nums) {
  let ans = Number.MAX_SAFE_INTEGER;
  let left = 0;
  let sum = 0;

  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];

    while (sum >= s) {
      ans = Math.min(ans, i + 1 - left);
      sum -= nums[left++];
    }
  }

  return ans !== Number.MAX_SAFE_INTEGER ? ans : 0;
}

console.log(minSubArrayLen(7, [2,3,1,2,4,3]));

/*
[2,3,1,2,4,3]
 *     ^
       ans = 4
[2,3,1,2,4,3]
   *   ^
   sum is at 6, resume march
[2,3,1,2,4,3]
   *     ^
   sum = 10
   ans == 4

[2,3,1,2,4,3]
     *   ^
     sum == 7
     ans = 3

[2,3,1,2,4,3]
       * ^
       sum is at 6, resume march


[2,3,1,2,4,3]
       *   ^
       ans = 2
       sum == 9

[2,3,1,2,4,3]
         * ^
      sum == 7
      ans = 2
[2,3,1,2,4,3]
           ^
           *
      sum = 3
*/

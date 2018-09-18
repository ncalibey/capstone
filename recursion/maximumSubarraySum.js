/*
  Split the array into left and right, get the sum of each, and then get the
  sum of the subarray that crosses the midpoint. We do the first two with
  recursion, and the last by looping from m down to l, and m + 1 up to r.

  Base case is when l == r. We return max of left, right, and crossover.
*/
function maxCrossingSum(arr, l, m, r) {
  let sum = 0;
  let leftSum = -Infinity;
  let rightSum = -Infinity;

  for (let i = m; i >= l; i -= 1) {
    sum += arr[i];
    if (sum > leftSum) leftSum = sum;
  }

  sum = 0;

  for (let i = m + 1; i <= r; i += 1) {
    sum += arr[i];
    if (sum > rightSum) rightSum = sum;
  }

  return leftSum + rightSum;
}

function maximumSubarraySum(arr, l=0, r=arr.length - 1) {
  if (arr.length === 0) return [];
  if (l === r) return arr[l];

  const m = Math.floor(l + (r - l) / 2);

  return Math.max(maximumSubarraySum(arr, l, m),
                  maximumSubarraySum(arr, m + 1, r),
                  maxCrossingSum(arr, l, m, r));
}

console.log(maximumSubarraySum([-2,-5,6,-2,-3,1,5,-6]));
console.log(maximumSubarraySum([0,-1,2,-3,5,-9,1,3]));
console.log(maximumSubarraySum([]));

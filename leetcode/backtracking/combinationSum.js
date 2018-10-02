/*
Solution: All possible combos that sum to target

Dead Ends: When the sum of temp is greater than the target

Self-managing: Pop the last added value

Branching logic:
  If the sum is equal to the target, we put a copy into the results array. If
  it's too small, we make recursive calls until the next match or greater sum.
*/
function combinationSumHelper(nums, target, temp, results, i) {
  const val = nums[i];

  temp.push(val)

  const sum = temp.reduce((a, b) => a + b);

  if (sum === target) {
    results.push(temp.slice());
  } else if (sum < target) {
    for (let j = i; j < nums.length; j += 1) {
      combinationSumHelper(nums, target, temp, results, j);
      continue;
    }
  }

  temp.pop();
}

var combinationSum = function(candidates, target) {
  const results = [];
  const temp = [];

  for (let i = 0; i < candidates.length; i+= 1) {
    combinationSumHelper(candidates, target, temp, results, i);
    temp.pop();
  }

  return results
};

console.log(combinationSum([2,3,5], 8));

function findTargetSumWaysHelper(nums, s, cache, sum, i) {
  if (i === nums.length) {
    if (sum === s) {
      return 1;
    } else {
      return 0;
    }
  } else {
    if (cache[[i, sum]]) {
      return cache[[i, sum]];
    } else {
      const add = findTargetSumWaysHelper(nums, s, cache, sum + nums[i], i + 1);
      const sub = findTargetSumWaysHelper(nums, s, cache, sum - nums[i], i + 1);

      return cache[[i, sum]] = add + sub;
    }
  }
}

var findTargetSumWays = function(nums, S) {
  const cache = {};

  return findTargetSumWaysHelper(nums, S, cache, 0, 0)
};

console.log(findTargetSumWays([1,1,1,1,1], 3));

function robHelper(nums, i, cache) {
  if (i === 0) return nums[i];
  if (i === 1) return cache[1] || cache[1] = Math.max(nums[0], nums[1]);
  if (cache[i]) return cache[i];

  return cache[i] = Math.max(nums[i] + robHelper(nums, i - 2, cache), robHelper(nums, i - 1, cache));
}

var rob = function(nums) {
  if (nums.length === 0) return 0;

  return robHelper(nums, nums.length - 1, {});
};

console.log(rob([1,2,3,1]));
console.log(rob([2,7,9,3,1]));
console.log(rob([]));
console.log(rob([5]));
console.log(rob([5,3]));
console.log(rob([2,1,1,2]));

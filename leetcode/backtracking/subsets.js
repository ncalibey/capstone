function subsetsHelper(nums, i, temp, results, cache) {
  const val = nums[i];

  temp.push(val);

  results.push(temp.slice());

  for (let j = i + 1; j < nums.length; j += 1) {
    subsetsHelper(nums, j, temp, results, cache);
  }

  temp.pop();
}

var subsets = function(nums) {
  const temp = [];
  const results = [[]];
  const cache = {};

  for (let i = 0; i < nums.length; i += 1) {
    subsetsHelper(nums, i, temp, results, cache);
    temp.pop();
  }

  return results;
};

console.log(subsets([1,2,3]));

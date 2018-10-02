function subsetsWithDupHelper(nums, i, temp, results, cache) {
  const val = nums[i];

  temp.push(val);

  const sorted = temp.slice().sort((a, b) => a - b);

  if (!cache[sorted]) {
    cache[sorted] = sorted;
    results.push(sorted);

    for (let j = i + 1; j < nums.length; j += 1) {
      subsetsWithDupHelper(nums, j, temp, results, cache);
    }

    temp.pop();
  } else {
    temp.pop();
  }
}

var subsetsWithDup = function(nums) {
  const temp = [];
  const results = [[]];
  const cache = {};

  for (let i = 0; i < nums.length; i += 1) {
    subsetsWithDupHelper(nums, i, temp, results, cache);
    temp.pop();
  }

  return results;
};

// console.log(subsetsWithDup([1,2,2]));
// console.log(subsetsWithDup([1,1,2,2]));
console.log(subsetsWithDup([4,4,4,1,4]));

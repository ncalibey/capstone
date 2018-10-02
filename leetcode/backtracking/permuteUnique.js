function permuteUniqueHelper(nums, temp, results, i, cache) {
  if (temp.indexOf(i) === -1) {
    temp.push(i);

    if (temp.length === nums.length) {
      const mapped = temp.map(n => nums[n]);

      if (!cache[mapped]) {
        cache[mapped] = true;
        results.push(mapped);
      }
    } else {
      for (let j = 0; j < nums.length; j += 1) {
        permuteUniqueHelper(nums, temp, results, j, cache);
        continue;
      }
    }

    temp.pop();
  }
}

var permuteUnique = function(nums) {
  const temp = [];
  const results = [];
  const cache = {};

  for (let i = 0; i < nums.length; i += 1) {
    permuteUniqueHelper(nums, temp, results, i, cache);
    temp.pop();
  }

  return results;
};

console.log(permuteUnique([1,1,2]));
console.log(permuteUnique([3,2,6]));

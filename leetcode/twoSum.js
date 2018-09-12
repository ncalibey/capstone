var twoSum = function(nums, target) {
  const seenNums = {};

  for (let i = 0; i < nums.length; i++) {
    const num = nums[i];

    if (seenNums.hasOwnProperty(num)) {
      return [seenNums[num], i];
    } else {
      seenNums[target - num] = i;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));

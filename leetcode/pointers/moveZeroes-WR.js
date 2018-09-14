/*
  Input: Array of Numbers
  Output: Array with 0s at the end

  - in place (mutate)

  Read/Write pointers:
    - set write to 0 and read to 1
      - loop
        - if reader != writer && arr[w] === target value
          - swap
          - increment both
        - else
          - increment reader
          - if writer !== target, also increment
    - return array once reader has traversed
*/

var moveZeroes = function(nums) {
  let i = 0;

  for (j = i + 1; j < nums.length; j++) {
    let writer = nums[i];
    let reader = nums[j];

    if (writer !== reader && writer === 0) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    } else {
      if (writer !== 0) i++;
    }
  }
};

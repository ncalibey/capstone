/*
  Input: Array
  Output: Number

  UTP:
    - array must be mutated, cannot allocate more space

  Read/Write pointers:
    - set write to 0 and read to 1
      - loop
        - if reader != writer && arr[w] === target value
          - swap
          - increment both
        - else
          - increment reader
          - if writer !== target, also increment
    - set array.length to i
*/

var removeElement = function(nums, val) {
  let i = 0;

  for (j = i; j < nums.length; j++) {
    let writer = nums[i];
    let reader = nums[j];

    if (writer !== reader && writer === val) {
      [nums[i], nums[j]] = [nums[j], nums[i]];
      i++;
    } else {
      if (writer !== val) i++
    }
  }

  if (i === 0 && nums[i] === val) {
    return nums.length = 0;
  } else if (i === 0 && i !== val) {
    return nums.length;
  } else {
    return nums.length = i;
  }
};

console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2));
console.log(removeElement([3, 2, 2, 3], 3));
console.log(removeElement([2], 3));
console.log(removeElement([1], 1));
console.log(removeElement([3, 3], 1));

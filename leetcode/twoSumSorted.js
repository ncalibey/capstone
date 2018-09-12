/*
  Have two pointers starting at either end. If their sum is less than the val,
  then increment the left pointer. If it is greater, then decrement the right
  pointer.
*/

var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      return [left + 1, right + 1];
    } else if (sum < target) {
      left++;
    } else if (sum > target) {
      right--;
    }
  }
};

console.log(twoSum([2,7,11,15], 9));

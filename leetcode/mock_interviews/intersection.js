/*

UTP:
  - given two arrays, compute their intersection
    - must be unique
    - result in any order
  - you can mutate, but your choice
  - array could be size of 1
  - always integers
  - won't always be an intersection
  - could be empty
    - just return []


Mental Models:

BF:
  - concat the arrays
  - return a new array of unique elements


  [4, 9, 5, 9, 4, 9 ,8 , 4]
  ^

  [1, 2, 2, 1]
   ^

  [2, 2]
   ^
  [2]

Hash Table

- we have a hash table that tracks when we find an element in nums1
  only add it the first time
    use value of boolean true
- we go over the second array
  - if it exists in the hash table, we put value into a new array
    - we then delete the key
  - if it doesnt, nothing happens
*/

function intersection(nums1, nums2) {
  const seen = {};
  const returnArr = [];

  if (nums1.length === 0 || nums2.length === 0) {
    return returnArr;
  }

  for (let i = 0; i < nums1.length; i += 1) {
    if (!seen[nums1[i]]) {
      seen[nums1[i]] = true;
    }
  }

  for (let i = 0; i < nums2.length; i += 1) {
    if (seen[nums2[i]]) {
      returnArr.push(nums2[i]);
      seen[nums2[i]] = false;
    }
  }

  return returnArr;
}

console.log(intersection([1,2,2,1], [2,2]));
console.log(intersection([4,9,5], [9,4,9,8,4]));
console.log(intersection([4,9,5], []));
console.log(intersection([], [9,4,9,8,4]));
console.log(intersection([5], [9,4,9,8,4]));
console.log(intersection([9,3], [5]));

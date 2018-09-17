/*
Input: array of numbers
Output: Number that is maximum value in the array

Mental Model:
To solve this, we can perform two recursive searches: one to the left, and one
to the right.

We can use two pointers that point to the left and right indexes on each search,
and then pass these in with the array recursively. When searching left, we pass
in the midpoint as the right value, and when searching right, we pass in the
midpoint + 1 as the left value. We also always pass in the target and the array.

The base case is when the left and right pointers are pointed at the same
element, in which case we make a comparison between arr[index] and the target.
If they're equal, we return the index, otherwise we return -1.

The return value for each recursive call is max(left_arr, right_arr).

If the same number appears twice, then the larget index is returned.

Alg:
- calculate midpoint, left defaults to 0, right to arr.size - 1
  - search left side (arr, left, mid)
    - recurse
      - return either the index or -1 at the base case
    - return max(left_arr, right_arr)
  - search right side (arr, mid + 1, right)
    - recurse
      - return either the index or -1 at the base case
    - return max(left_arr, right_arr)
  - return max(left_arr, right_arr)
*/

function findNumberInArray(arr, target, left=0, right=arr.length - 1) {
  if (arr.length === 0) return -1;

  if (left === right) return arr[left] === target ? left : -1;

  const mid = Math.floor(left + (right - left) / 2);
  const leftArr = findNumberInArray(arr, target, left, mid);
  const rightArr = findNumberInArray(arr, target, mid + 1, right);

  return Math.max(leftArr, rightArr);
}

console.log(findNumberInArray([5,3,2,7], 2) === 2);
console.log(findNumberInArray([5,3,2,7], 5) === 0);
console.log(findNumberInArray([5,3,2,7], 7) === 3);
console.log(findNumberInArray([5,3,2,7], 3) === 1);
console.log(findNumberInArray([5,3,2,7], 8) === -1);
console.log(findNumberInArray([], 5) === -1);
console.log(findNumberInArray([1,2,5,3,4,5], 5) === 5);

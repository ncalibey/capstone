/*
Input: array of numbers
Output: Number that is maximum value in the array

Mental Model:
To solve this, we can perform two recursive searches: one to the left, and one
to the right.

We can use two pointers that point to the left and right indexes on each search,
and then pass these in with the array recursively. When searching left, we pass
in the midpoint as the right value, and when searching right, we pass in the
midpoint + 1 as the left value.

The base case is when the left and right pointers are pointed at the same
element. The return value is a comparison to get the maximum value between the
left and right subarrays.

Alg:
- calculate midpoint, left defaults to 0, right to arr.size - 1
  - search left side (arr, left, mid)
    - recurse
    - return max(left_arr, right_arr)
  - search right side (arr, mid + 1, right)
    - recurse
    - return max(left_arr, right_arr)
  - return max(left_arr, right_arr)
*/
function maxNumberInArray(arr, left=0, right=arr.length - 1) {
  if (arr.length === 0) return [];
  if (left === right) return arr[left];

  const mid = Math.floor(left + (right - left) / 2);

  const leftArr = maxNumberInArray(arr, left, mid);
  const rightArr = maxNumberInArray(arr, mid + 1, right);

  return Math.max(leftArr, rightArr);
}

console.log(maxNumberInArray([5,7,3,2,6]));
console.log(maxNumberInArray([-3, 0,-5, 0, -3]));
console.log(maxNumberInArray([1]));
console.log(maxNumberInArray([]));
console.log(maxNumberInArray([1,1,5,1,1,1,1,1,1]));

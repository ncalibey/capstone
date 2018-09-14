/*
  Mental Model:

  We binary search until we find a midpoint. Once we do, we do a recursive
  binary search in each direction, but it only goes in that direction.

  We keep a `min` and `max` which are updated, and return those in the array
  at the end. If `min` is equal to it's initial value, it means the value wasn't
  found, and thus we return [-1, -1]
*/

function searchRange(nums, target) {
  let min;
  let max;

  let left = 0;
  let right = nums.length - 1;

  while (left + 1 < right) {
    let mid = Math.floor(left + (right - left) / 2);

    if (nums[mid] === target) {
      min = mid;
      max = mid;

      (function leftBinarySearch(l = 0, r) {
        while (l + 1 < r) {
          let m = Math.floor(l + (r - l) / 2);

          if (nums[m] === target) {
            leftBinarySearch(0, m - 1);
            break
          } else if (nums[m] < target) {
            l = m;
          } else {
            r = m;
          }
        }

        if (nums[l] === target) {
          min = Math.min(l, min);
        } else if (nums[r] === target) {
          min = Math.min(r, min);
        }
      })(0, mid - 1);

      (function rightBinarySearch(l, r) {
        while (l + 1 < r) {
          let m = Math.floor(l + (r - l) / 2);

          if (nums[m] === target) {
            rightBinarySearch(m, nums.length - 1);
            break
          } else if (nums[m] < target) {
            l = m;
          } else {
            r = m;
          }
        }

        if (nums[r] === target) {
          max = Math.max(r, max)
        } else if (nums[l] === target) {
          max = Math.max(l, max);
        }
      })(mid + 1, nums.length - 1);

      return [min, max];
    } else if (nums[mid] < target) {
      left = mid;
    } else {
      right = mid;
    }
  }

  if (nums[left] === target & nums[right] === target) {
    return [0, 1];
  }

  return [-1, -1];
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4]
console.log(searchRange([1,2,3,7,7,7,7,9,10,11], 7)); // [3, 6]
console.log(searchRange([7,7,7,9,10,11], 7)); // [0, 2]
console.log(searchRange([1,2,3,7,7,7], 7)); // [3, 5]
console.log(searchRange([5,7,7,7, 9], 7)); // [1, 3]
console.log(searchRange([1,1], 1)); // [0, 1]
console.log(searchRange([1,1,1], 1)); // [0, 2]
console.log(searchRange([1,2,2,3,4], 5)); // [-1, -1]

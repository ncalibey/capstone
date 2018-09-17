=begin
  Input: an Array
  Output: a sorted Array

  Mental Model:
  On each call we divide the array into a left array and a right array. We do
  this by using pointers which are by default `0` and `arr.length - 1`. These
  are changed depending on which way we want to look.

  The base case is when the left and right pointer are the same value (i.e.,
  they point to the same element). In this case we return the value in an array.

  Merge then takes the two arrays and combines them together using an algorithm
  that is O(m + n). We first add arr2.size `0`s to the first array to make sure
  we have enought 'dummies' set up. This takes O(N), which is okay since merge
  sort is O(N * log N). We return the mutated array for each recursive call.

  Time: O(N * log N)
  Space: O(N)
=end
def merge_sort(arr, left=0, right=arr.length - 1)
  return [] if arr.empty?
  return [arr[left]] if left == right

  mid = left + (right - left) / 2

  left_arr = merge_sort(arr, left, mid)
  right_arr = merge_sort(arr, mid + 1, right)

  merge(left_arr, right_arr)

  left_arr
end

def merge(arr1, arr2)
  r1 = arr1.length - 1
  r2 = arr2.length - 1

  0..arr2.length.times do
    arr1.push(0);
  end

  writer = arr1.length - 1

  while r2 >= 0
    if r1 < 0 || arr2[r2] > arr1[r1]
      arr1[writer] = arr2[r2]

      r2 -= 1
    else
      arr1[writer] = arr1[r1]

      r1 -= 1
    end

    writer -=1
  end
end

p merge_sort([5,3,7,2,4])
p merge_sort([5,4,3,2,1,0])
p merge_sort([3,99,54,2,0,35])
p merge_sort([5])
p merge_sort([])
p merge_sort([5, 3, 22, -5, 0])

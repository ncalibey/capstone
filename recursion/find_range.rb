=begin
Input: array of numbers
Output: Number that is maximum value in the array

Mental Model:
To solve this, we can perform two recursive searches: one to the left, and one
to the right. However, these searches will be helper functions.

We can use two pointers that point to the left and right indexes on each search,
and then pass these in with the array recursively. When searching left, we pass
in the midpoint as the right value, and we pass mid in for left when searching
to the right. This covers the case where the range size is 1.

However, we first have to do a normal binary search until we find at least one
instance of our value.

The base case is when the left and right pointers are pointed at the same
element, in which case we make a comparison between arr[index] and the target.
If they're equal, we return the index, otherwise we return -1.

When searching to the left, the return value first checks if the left_arr is
-1. If it is, we return the right value. Otherwise, we return
min(left_arr, right_arr). This avoids the situation of doing min(-1, x) where
x is > -1.

When searching to the right, we return max(left_arr, right_arr)

the function itself returns [left_search, right_search]
=end
def min(a, b)
  a <= b ? a : b
end

def max(a, b)
  a <= b ? b : a
end

def find_min_idx(arr, target, left=0, right)
  return arr[left] === target ? left : -1 if left == right

  mid = left + (right - left) / 2

  left_arr = find_min_idx(arr, target, left, mid)
  right_arr = find_min_idx(arr, target, mid + 1, right)

  return right_arr if left_arr == -1

  min(left_arr, right_arr)
end

def find_max_idx(arr, target, left, right=arr.length - 1)
  return arr[left] === target ? left : -1 if left == right

  mid = left + (right - left) / 2

  left_arr = find_max_idx(arr, target, left, mid)
  right_arr = find_max_idx(arr, target, mid + 1, right)

  max(left_arr, right_arr)
end

def binary_search(arr, target)
  left = 0
  right = arr.length - 1

  while left + 1 < right
    mid = left + (right - left) / 2

    if arr[mid] == target
      return mid
    elsif arr[mid] < target
      left = mid
    else
      right = mid
    end
  end

  return left if arr[left] === target
  return right if arr[right] === target
  nil
end

def find_range(arr, target)
  return [-1, -1] if arr.empty?

  left = 0
  right = arr.length - 1
  first_instance = binary_search(arr, target)

  if first_instance
    left_arr = find_min_idx(arr, target, left, first_instance)
    right_arr = find_max_idx(arr, target, first_instance, right)

    return [left_arr, right_arr]
  end

  [-1, -1]
end

p find_range([5,7,7,8,8,10], 4)
p find_range([5,7,7,8,8,10], 8)
p find_range([5,7,7,8,8,10], 10)
p find_range([5,7,7,8,8,10], 7)
p find_range([], 7)

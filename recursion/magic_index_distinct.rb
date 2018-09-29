def binary_search(nums, left, right)
  mid = left + (right - left) / 2

  if nums[mid] == mid
    return mid
  elsif left < right
    left_result = binary_search(nums, left, mid - 1)
    right_result = binary_search(nums, mid + 1, right)
  else
    return -1
  end

  [left_result, right_result].max
end

def magic_index(nums)
  binary_search(nums, 0, nums.length - 1)
end

p magic_index([-3,0,2,2,7,10,15]) == 2
p magic_index([-3,0,1,2,7,10,15]) == -1
p magic_index([1,1,1,5]) == 1
p magic_index([7,7,7,7]) == -1

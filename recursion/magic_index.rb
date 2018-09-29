def magic_index(nums)
  left = 0
  right = nums.length - 1

  while left + 1 < right
    mid = left + (right - left) / 2

    if nums[mid] == mid
      return mid
    elsif mid < nums[mid]
      right = mid
    else
      left = mid
    end
  end

  return left if nums[left] == left
  return right if nums[right] == right

  -1
end

puts magic_index([0,2,4,6]) == 0
puts magic_index([-5,-2,2,5]) == 2
puts magic_index([-3,1,5,6]) == 1
puts magic_index([-3,0,1,3]) == 3
puts magic_index([-3,0,1,5]) == -1

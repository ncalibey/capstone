=begin
  Input: Array of non-negative integers
  Output: Boolean

  Mental Model:
  We can recurse by using the value at the current index (i.e., nums[i]) as the
  integer for the next call, and recursively go down by 1 every time.

  We always have to check if a[i] == 0, because if it is, we return false. If
  not, we recursively call with a[i]. If at any point i == ar.l - 1, we've
  reached the end and we can return `true`
=end
def can_jump_helper(nums, idx=0, cache={})
  return true if idx >= nums.length - 1
  val = nums[idx]
  return false if val == 0

  while val > 0
    if cache[idx]
      return true
    else
      cache[idx] = can_jump_helper(nums, idx + val, cache)
    end

    val -= 1
  end

  return cache[idx]
end

def can_jump(nums)
  can_jump_helper(nums, 0, {})
end

p can_jump([2,3,0,0,4])
p can_jump([2,3,1,1,4])
p can_jump([3,2,1,0,4])

def permute_helper(nums, results, temp, i)
  val = nums[i]

  if !temp.include?(val)
    temp << val

    if temp.length == nums.length
      results << temp.clone
      temp.pop
    else
      j = 0

      while j < nums.length
        permute_helper(nums, results, temp, j)
        j += 1
      end

      temp.pop
    end
  end
end

def permute(nums)
  results = []
  temp = []
  i = 0

  while i < nums.length
    permute_helper(nums, results, temp, i)
    temp.pop

    i += 1
  end

  results
end

p permute([1,2,3])

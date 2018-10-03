def combo_helper(nums, target, i, temp, results)
  val = nums[i]

  temp << val
  sum = temp.reduce(:+)

  if (sum == target)
    results[temp.clone] = true
  elsif sum < target
    j = i + 1

    while j < nums.length
      combo_helper(nums, target, j, temp, results)
      j += 1
    end
  end

  temp.pop
end

def combination_sum2(candidates, target)
  candidates.sort!

  results = {}
  temp = []
  i = 0

  while i < candidates.length
    combo_helper(candidates, target, i, temp, results)
    temp.pop

    i += 1
  end

  results.keys
end

p combination_sum2([10,1,2,7,6,1,5], 8)

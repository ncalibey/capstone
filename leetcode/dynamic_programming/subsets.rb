=begin
  This mental model is a bottom up approach. We start with the base case, which
  is an empty set. For each element, we clone each of the subsets, push in the
  current element, and push this back into the return set.
=end

def subsets(nums)
  allSubsets = [[]]
  i = 0

  while i < nums.length
    j = 0
    l = allSubsets.length

    while j < l
      newSubset = allSubsets[j].clone
      newSubset << nums[i]
      allSubsets << newSubset

      j += 1
    end

    i += 1
  end

  allSubsets
end

p subsets([1,2,3])

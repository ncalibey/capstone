def sum_number_helper(root, array, nums)
  return if root.nil?

  array << root.val
  left = sum_number_helper(root.left, array, nums)
  right = sum_number_helper(root.right, array, nums)

  if left.nil? && right.nil?
    nums << array.join.to_i
  end

  array.pop
end

def sum_numbers(root)
  array = []
  nums = []

  sum_number_helper(root, array, nums)

  nums.reduce(:+)
end

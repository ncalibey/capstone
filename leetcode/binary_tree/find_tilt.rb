def find_tilt_helper(root, array)
  return 0 if root.nil?

  left = root.left
  right = root.right
  left_result = find_tilt_helper(left, array)
  right_result = find_tilt_helper(right, array)
  val = root.val

  array[0] += (left_result - right_result).abs

  return val + left_result + right_result
end

def find_tilt(root)
  return 0 if root.nil?

  array = [0]
  find_tilt_helper(root, array)

  array[0]
end

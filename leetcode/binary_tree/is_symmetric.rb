def is_symmetric_helper(a, b)
  return true if a.nil? && b.nil?
  return false if a.nil? || b.nil?

  a.val == b.val &&
  is_symmetric_helper(a.left, b.right) &&
  is_symmetric_helper(a.right, b.left)
end

def is_symmetric(root)
  is_symmetric_helper(root, root)
end

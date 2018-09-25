def is_valid_bst_helper(root, stack=[])
  return if tree.nil?

  is_valid_bst_helper(root.left, stack)

  return false if stack[-1] >= root.val
  stack << root.val

  is_valid_bst_helper(root.right, stack)

  true
end

def is_valid_bst(root)
  stack = [-Float::INFINITY]
  is_valid_bst_helper(root, stack)
end

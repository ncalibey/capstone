def preorder_traversal_helper(root, stack=[])
  return if root.nil?

  stack << root.val
  preorder_traversal_helper(root.left, stack)
  preorder_traversal_helper(root.right, stack)
end

def preorder_traversal(root)
  stack = []
  preorder_traversal_helper(root, stack)

  stack
end

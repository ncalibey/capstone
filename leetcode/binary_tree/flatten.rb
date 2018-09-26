def preorder_traversal(root, queue=[])
  return if root.nil?

  queue << root
  preorder_traversal(root.left, queue)
  preorder_traversal(root.right, queue)
end

def flatten_helper(queue)
  while queue.length > 0
    dequeued = queue.shift
    dequeued.right = queue[0]
    dequeued.left = nil
  end
end

def flatten(root)
  queue = []
  preorder_traversal(root, queue)
  flatten_helper(queue)
end

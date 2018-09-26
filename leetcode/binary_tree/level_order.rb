def level_order(root)
  return [] if root.nil?
  curr_q = [root]
  levels = []

  while !curr_q.empty?
    level = []
    next_q = []

    while !curr_q.empty?
      node = curr_q.shift
      level << node.val

      next_q << node.left if node.left
      next_q << node.right if node.right
    end

    levels << level
    curr_q = next_q
  end

  levels
end

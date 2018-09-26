def average_of_levels(root)
  return [] if root.nil?

  curr_q = [root]
  levels = []

  while !curr_q.empty?
    next_q = []
    sum = 0
    l = 0

    while !curr_q.empty?
      node = curr_q.shift
      sum += node.val
      l += 1

      next_q << node.left if node.left
      next_q << node.right if node.right
    end

    levels << sum / l.to_f
    curr_q = next_q
  end

  levels
end

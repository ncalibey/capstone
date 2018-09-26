def max_depth(tree, cache)
  return 0 if tree.nil?
  return cache[tree] if cache[tree]

  left, right = tree.left, tree.right
  left_result = cache[left] || max_depth(left) + 1
  right_result = cache[right] || max_depth(right) + 1

  cache[tree] = [left_result, right_result].max
end

def is_balanced_helper(root, cache={})
  return true if root.nil?

  max_left = max_depth(root.left, cache)
  max_right = max_depth(root.right, cache)

  min, max = [max_left, max_right].sort

  if max - min <= 1
    return is_balanced(root.left, cache) && is_balanced(root.right, cache)
  else
    return false
  end
end

def is_balanced(root)
  is_balanced_helper(root, {})
end

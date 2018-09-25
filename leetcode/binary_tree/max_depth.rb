class TreeNode
  attr_accessor :val, :left, :right

  def initialize(val)
    @val = val
    @left, @right = nil, nil
  end
end

def max_tree_helper(node, level=1)
  return level if node.left.nil? && node.right.nil?

  if node.left.nil?
    return max_tree_helper(node.right, level + 1)
  elsif node.right.nil?
    return max_tree_helper(node.left, level + 1)
  end

  left, right = node.left, node.right
  left_result = max_tree_helper(left, level + 1)
  right_result = max_tree_helper(right, level + 1)

  [left_result, right_result].max
end

def max_depth(tree)
  return 0 if tree.nil?

  left, right = tree.left, tree.right
  left_result = max_tree_helper(left) + 1
  right_result = max_tree_helper(right) + 1

  [left_result, right_result].max
end

tree1 = TreeNode.new(3)
tree1.left = TreeNode.new(9)
tree1.right = TreeNode.new(20)
tree1.right.left = TreeNode.new(15)
tree1.right.right = TreeNode.new(7)

p max_depth(tree1)

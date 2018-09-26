class TreeNode
  attr_accessor :val, :left, :right

  def initialize(val)
    @val = val
    @left, @right = nil, nil
  end
end

def max_depth(tree)
  return 0 if tree.nil?

  left, right = tree.left, tree.right
  left_result = max_depth(left) + 1
  right_result = max_depth(right) + 1

  [left_result, right_result].max
end

tree1 = TreeNode.new(3)
tree1.left = TreeNode.new(9)
tree1.right = TreeNode.new(20)
tree1.right.left = TreeNode.new(15)
tree1.right.right = TreeNode.new(7)

p max_depth(tree1)

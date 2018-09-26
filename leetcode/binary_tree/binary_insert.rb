require_relative 'tree_helper'

def binary_insert(tree, val)

  while true
    if val < tree.val
      if tree.left
        tree = tree.left
      else
        tree.left = TreeNode.new(val)
        break
      end
    elsif val > tree.val
      if tree.right
        tree = tree.right
      else
        tree.right = TreeNode.new(val)
        break
      end
    end

  end

end

t1 = TreeNode.treeify([100,20,500,10,30])
binary_insert(t1, 600)
binary_insert(t1, 40)
binary_insert(t1, 5)
binary_insert(t1, 35)
puts t1

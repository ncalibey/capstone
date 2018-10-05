=begin
return an array of the node values of the right most node at each level

use 2 data structures, one to hold the parents, and one the children
put the last child into the return data structure

break loop once parents is empty


=end

def levelOrder(root, results)
  parents = [root]

  while !parents.empty?
    children = []

    while !parents.empty?
      parent = parents.shift

      children << parent.left if parent.left
      children << parent.right if parent.right
    end

    results << children.last unless children.last.nil?

    parents = children
  end
end


def right_side_view(root)
  return [] if root.nil?

  results = [root]

  levelOrder(root, results)

  results.map { |node| node.val}
end

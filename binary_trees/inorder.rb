class Node
  attr_accessor :left, :right, :val
  def initialize(val)
    @val = val
    @left = nil
    @right = nil
  end
end

t1 = Node.new(1)
t1.left = Node.new(2)
t1.left.left = Node.new(4)
t1.left.right = Node.new(5)
t1.right = Node.new(3)

def inorder(node)
  return if node.nil?

  inorder(node.left)
  puts node.val
  inorder(node.right)
end

def preorder(node)
  return if node.nil?

  puts node.val
  preorder(node.left)
  preorder(node.right)
end

def postorder(node)
  return if node.nil?

  postorder(node.left)
  postorder(node.right)
  puts node.val
end

def print_level(node, i)
  return if node.nil?

  if i == 1
    p node.val
  else
    print_level(node.left, i - 1)
    print_level(node.right, i - 1)
  end
end

def level_order(node)
  i = 1
  h = 3

  while i <= h
    print_level(node, i)

    i += 1
  end
end

inorder(t1)
puts
preorder(t1)
puts
postorder(t1)
puts
level_order(t1)

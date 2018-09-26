class Node
  attr_accessor :next, :val

  def initialize(val)
    @val = val
  end
end

class Stack
  attr_reader :size

  def initialize
    @top = Node.new('head')
    @size = 1
  end

  def push(val)
    next_node = Node.new(val)

    next_node.next = @top
    @top = next_node
    @size += 1

    @top.val
  end

  def peek
    @top.val
  end

  def pop
    popped = @top
    @top = @top.next
    @size -= 1

    popped.val
  end
end

stack = Stack.new
p stack.push('a')
p stack.size
p stack.push('b')
p stack.size
p stack.pop
p stack.size
p stack.pop
p stack.size
p stack.peek

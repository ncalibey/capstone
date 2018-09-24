class Stack
  def initialize
    @construct = []
    @top = -1
  end

  def push(item)
    @construct.push(item)
    @top += 1
  end

  def pop
    @construct.pop
    @top -= 1
  end

  def peek
    @construct[@top]
  end

  def size
    @top + 1
  end
end

def is_valid_close?(stack, bracket)
  if bracket == ')'
    stack.peek == '('
  elsif bracket == '}'
    stack.peek == '{'
  else
    stack.peek == '['
  end
end

def is_valid(s)
  return true if s.empty?

  n = s.length
  i = 0
  stack = Stack.new

  while i < n
    c = s[i]

    if /[\(\[\{]/.match(c)
      stack.push(c)
    else
      return false unless is_valid_close?(stack, c)
      stack.pop
    end

    i += 1
  end

  stack.size == 0
end

p is_valid('()') == true
p is_valid('()[]{}') == true
p is_valid('(]') == false
p is_valid('') == true
p is_valid('([)]') == false
p is_valid('{[]}') == true

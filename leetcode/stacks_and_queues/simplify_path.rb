class Stack
  def initialize
    @construct = []
  end

  def push(item)
    @construct.push(item)
  end

  def pop
    @construct.pop
  end

  def read
    @construct.join
  end
end

def simplify_path(path)
  parts = path.scan(/[^\/]+/)
  stack = Stack.new

  parts.each do |dir|
    if dir == '..'
      stack.pop
    elsif dir != '.'
      stack.push("/#{dir}")
    end
  end

  new_path = stack.read

  new_path == '' ? '/' : new_path
end

p simplify_path('/../')
p simplify_path('/home/')
p simplify_path("/a/./b/../../c/")
p simplify_path("/a/../../b/../c//.//")
p simplify_path("/a//b////c/d//././/..")
p simplify_path("/a/b/c/../../..")
p simplify_path("/...")

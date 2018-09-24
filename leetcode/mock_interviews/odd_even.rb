class Node
  attr_accessor :next, :val

  def initialize(val)
    @val = val
  end
end

test1 = Node.new(1)
test1.next = Node.new(2)
test1.next.next = Node.new(3)
test1.next.next.next = Node.new(4)
test1.next.next.next.next = Node.new(5)

def odd_even_list(head)
  count = 1
  even_dummy = Node.new('even')
  odd_dummy = Node.new('odd')
  even_curr = even_dummy
  odd_curr = odd_dummy
  curr = head

  while curr
    if count % 2 == 1
      odd_curr.next = curr
      odd_curr = curr
    else
      even_curr.next = curr
      even_curr = curr
    end

    count += 1
    curr = curr.next
  end

  odd_curr.next = even_dummy.next
  even_curr.next = nil

  head
end

p odd_even_list(test1)

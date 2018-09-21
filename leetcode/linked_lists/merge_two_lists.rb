require_relative 'node_helper'

def merge_two_lists(l1, l2)
  dummy = Node.new('dummy')
  curr = dummy

  while l1 || l2
    if l1.nil?
      curr.next = l2
      break
    elsif l2.nil?
      curr.next = l1
      break
    elsif l1.val <= l2.val
      curr.next = l1
      curr = l1
      l1 = l1.next
    else
      curr.next = l2
      curr = l2
      l2 = l2.next
    end
  end

  dummy.next
end


puts merge_two_lists(nodify([1,2,4]), nodify([1,3,4]))
puts merge_two_lists(nodify([5,13,20]), nodify([2,10,15]))

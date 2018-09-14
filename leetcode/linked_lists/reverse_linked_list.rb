=begin
Mental Model:

We use a three pointer slide of prev, curr, and next. prev will always cache
the value of curr and is initialized to null.

Within our traversal we create next_node = curr.next, and then set curr.next =
prev. Then we cache curr in prev and then set curr = next_node.

We return `prev`.

Time: O(N)
Space: O(1)
=end

def reverse_list(head)
  return [] if head.nil?
  return head if head.next.nil?

  prev = nil
  curr = head

  while !curr.nil?
    next_node = curr.next
    curr.next = prev
    prev = curr
    curr = next_node
  end

  prev
end

#Definition for singly-linked list.
class ListNode
    attr_accessor :val, :next
    def initialize(val)
        @val = val
        @next = nil
    end
end

def remove_elements(head, val)
  return [] if head.nil?
  return head if head.next.nil?

  curr = head
  nxt = head.next

  while !nxt.nil?
    if nxt.val === val
      curr.next = nxt.next
    end

    curr = curr.next

    if curr.val === nil
      break
    end
  end

  head
end

=begin
  Model:
    Input: Node List
    Output: Node List

    - singly-linked list
    - remove all duplicates from the list

    1->1->2
    1->2

    1->1->2->3->3
    1->2->3

  The idea is to traverse the list while keeping track of the value of the
  current node and the next node. If their values are equal, set c.n to n.n
  and then set n.n to c.n. Otherwise, set current to c.n, and next to c.n


  1->1->2->3->3
  C  N
                values are the same, so set C.next to N.next(2) and N to the
                same
  1  1->2->3->3
  C     N       values are different, so move C to N, and N + 1

  _______
  |     |
  1  1->2->3->3
  *     C  N
                values are different, so move C to N and N + 1
  _______
  |     |
  1  1->2->3->3
  *     *  C  N values are the same, so set C.next to N.next(nil) and N to the
                same
  __________
  |     |  |
  1  1->2->3  3
  *     *  C    N is now nil, so return the head
=end

def delete_duplicates(head)
  return nil if head.nil?
  return head if head.next.nil?

  curr = head
  next_node = head.next

  while !next_node.nil?
    if curr.val == next_node.val
      curr.next = next_node.next
      next_node = curr.next
    else
      curr = curr.next
      next_node = curr.next
    end
  end

  head
end

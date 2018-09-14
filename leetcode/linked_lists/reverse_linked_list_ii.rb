=begin
Metal Model:

  Input: Linked list and 2 targets
  Output: Linked list where nodes in target range have been reversed

  Alg:

  Traverse normally, break when c.v == null and initialize next_node = c.n on
  each loop

  Once next_node.val == m, we cache the current node into a variable `s` as well
  as the next node `sn`.

  We perform a 3 pointer slide as long as current.val <= n && >= m
    - Within this slide, once next_node.val is equal to n, we cache the current
      node, as well as the last node (`ln` and `l`)

  Once the loop is done, we set:
    s.next = ln
    sn.n = l

  Time: O(N)
  Space: O(1)
=end
require_relative 'node_helper'

def reverse_between(head, m, n)
  return [] if head.nil?
  return head if head.next.nil?

  prev = head
  curr = head

  pos = 1
  start = nil
  before_slide = nil
  slide_start = nil
  slide_end = nil
  after_slide = nil

  while !curr.nil?
    next_node = curr.next

    if pos >= m && pos <= n
      if pos == m
        slide_start = curr

        before_slide = prev if curr.val != prev.val
      end

      if pos == n
        slide_end = curr

        after_slide = next_node if !next_node.nil?
      end
      curr.next = prev
    end

    prev = curr
    curr = next_node
    pos += 1
  end

  if !before_slide.nil?
    before_slide.next = slide_end
    start = head
  else
    start = slide_end
  end

  slide_start.next = !after_slide.nil? ? after_slide : nil

  start
end

puts reverse_between(nodify([1,2,3,4,5]), 2, 4)
puts reverse_between(nodify([1,2,3,4,5]), 3, 4)
puts reverse_between(nodify([1,2,3,4]), 2, 3)
puts reverse_between(nodify([1,2,3,4]), 1, 3)
puts reverse_between(nodify([1,2]), 1, 2)
puts reverse_between(nodify([1,2,3,4]), 3, 4)
puts reverse_between(nodify([3,5]), 1, 1)

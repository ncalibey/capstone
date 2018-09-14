=begin
Mental Model:

  Input: Link list
  Output: Linked List with nodes that have duplicates removed (unique left)


Traverse the linked list until c.val == null. If curr.val != next_node.val, then
traverse as normal (i.e., they both go forward). Cache the current node into a
`prev` variable (`prev` is initialized to `head`)

In addition, every time the values are unequal we should do:
  `start = current if start.nil?`

This will cache the first non-duplicate element found, and is our return value

If curr.val == next_node.val, we begin a loop where next_node keeps traversing
until it's value is not equal to the current node's value. At this point,
set `prev.next` to `next_node`, and set current = next and then continue
the traversal

Time O(N)
Space O(1)

Pseudo Code:
  while(!c.nil?)
    if c.val != n.val
      s = c if s.nil?
      p = c
      traverse
    else if c.val == n.val
      while (c.val == n.val)
        traverse n
      end

      p.n = n
      c = n
  end

  start
=end
require_relative 'node_helper'
require 'pry'

def delete_duplicates(head)
  return [] if head.nil?
  return head if head.next.nil?

  prev = head
  curr = head
  start = nil

  while !curr.nil?
    next_node = curr.next

    if next_node.nil?
      start = curr if start.nil?

      curr = next_node
    elsif curr.val != next_node.val
      start = curr if start.nil?

      prev = curr
      curr = next_node
    elsif curr.val == next_node.val
      while curr.val == next_node.val
        next_node = next_node.next

        break if next_node.nil?
      end

      prev.next = next_node
      curr = next_node
    end
  end

  start || []
end

puts delete_duplicates(nodify([1,2,3,3,4,4,5]))

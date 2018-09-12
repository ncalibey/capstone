=begin
  Input/Output: String

  - have 2 pointers, one at end, one at start, and swap characters until they
    meet or pass each other
    - runtime: O(N)
    - size: O(N)
=end
def reverse_string(s)
  left = 0
  right = s.length - 1

  while left < right
    s[left], s[right] = s[right], s[left]
    left += 1
    right -= 1
  end

  s
end

p reverse_string('hello') == 'olleh'
p reverse_string("A man, a plan, a canal: Panama") == "amanaP :lanac a ,nalp a ,nam A"

def isPalindrome?(s, l, r)
  return true if l == r

  while l < r
    return false if s[l] != s[r]

    l += 1
    r -= 1
  end

  true
end

def backtrack(s, i, temp, results)
  if temp.size > 0 && i >= s.length
    results << temp.clone
  end

  j = i

  while j < s.length
    if isPalindrome?(s, i, j)
      if (i == j)
        temp << s[i]
      else
        temp << s.slice(i..j)
      end

      backtrack(s, j + 1, temp, results)
      temp.pop
    end

    j += 1
  end
end

def partition(s)
  results = []
  temp = []

  backtrack(s, 0, temp, results)

  results
end

p partition('aab')
p partition('aabccd')

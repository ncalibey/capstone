def is_palindrome?(str, first=0, last=str.length - 1)
  return true if first >= last
  return is_palindrome??(str, first + 1, last - 1) if str[first] == str[last]

  false
end

p is_palindrome?('abccba') === true
p is_palindrome?('a') === true
p is_palindrome?('abc') === false
p is_palindrome?('abccb') === false
p is_palindrome?('   ') === true

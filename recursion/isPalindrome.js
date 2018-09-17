/*
  - use pointers to check first and last
    - pointers are passed in, otherwise default to 0 and str.length - 1

  - if str.length === 0 or 1, return true
  - check if first === last
    - if it does, then recurse
    - o/w return false

  Time: O(N)
  Space: O(N)
*/
function isPalindrome(str, first=0, last=str.length - 1) {
  if (first >= last) return true;
  if (str[first] === str[last]) return isPalindrome(str, first + 1, last - 1);

  return false;
}

console.log(isPalindrome('abccba') === true);
console.log(isPalindrome('a') === true);
console.log(isPalindrome('abc') === false);
console.log(isPalindrome('abccb') === false);
console.log(isPalindrome('   ') === true);

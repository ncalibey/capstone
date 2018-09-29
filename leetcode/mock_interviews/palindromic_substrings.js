function isPalindrome(substring) {
  let left = 0;
  let right = substring.length - 1;

  while (left < right) {
    if (substring[left] !== substring[right]) return false;

    left += 1;
    right -= 1;
  }

  return true;
}

var countSubstrings = function(s) {
  let count = 0;
  const substrings = {};

  for (let i = 0; i < s.length; i += 1) {

    for (let j = i; j < s.length; j += 1) {
      const substring = s.slice(i, j + 1);

      if (substrings[substring]) {
        count += 1;
      } else if (isPalindrome(substring)) {
        substrings[substring] = true;
        count += 1;
      }
    }
  }

  return count;
};

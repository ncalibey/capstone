/*
  Input/Output: String

  - loop from end to front, building a new string the whole time
    - runtime O(N)
    - size: O(N^2)
*/

var reverseString = function(s) {
  let reversed = '';

  for (let i = s.length - 1; i >= 0; i -= 1) {
    reversed += s[i];
  }

  return reversed;
};

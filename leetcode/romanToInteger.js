/*
Roman to Integer

- seven symbols: I, V, X, L, C, D, M
- I before V is 4
- I before X is 10
- X before L is 40
- X before C is 90
- C before D is 400
- D before M is 900

  Input: String
  Output: Number

- read chars and have a running total
- use helpers with the 'odd' characters
- have a hash that keeps track of numerals and their value

Algorithm:
  a) read string left to right
    a.i) keep a running total starting at 0 and a `pos` for position at 0
    a.ii) if `char` is /[VLDM]/ then add to total and increment by 1
      - else, check the next character
        - if it is a 'matching' (i.e., leads to 4, 9, etc), subtract 2nd by 1st
          and up `pos` by 2
        - else, increment and up `pos` by 1
  b) return total
*/
function getNumeralValue(numeral) {
  const VALUES = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000
  };

  return VALUES[numeral];
}

function isSubtractedNumeral(numeral, nextNumeral) {
  if (/[VLDM]/.test(numeral)) return false;

  const NEXT_NUMERAL = {
    'I': /[VX]/,
    'X': /[LC]/,
    'C': /[DM]/
  };

  return NEXT_NUMERAL[numeral].test(nextNumeral);
}

function romanToInteger(numerals) {
  let sum = 0;

  for (let i = 0; i < numerals.length;) {
    const numeral = numerals[i];
    const nextNumeral = numerals[i + 1];

    if (nextNumeral !== undefined && isSubtractedNumeral(numeral, nextNumeral)) {
      sum += (getNumeralValue(nextNumeral) - (getNumeralValue(numeral)))
      i += 2;
    } else {
      sum += getNumeralValue(numeral);
      i++;
    }
  }

  return sum;
}

console.log(romanToInteger('III'));
console.log(romanToInteger('IV'));
console.log(romanToInteger('IX'));
console.log(romanToInteger('LVIII'));
console.log(romanToInteger('MCMXCIV'));

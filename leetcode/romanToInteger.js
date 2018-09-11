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

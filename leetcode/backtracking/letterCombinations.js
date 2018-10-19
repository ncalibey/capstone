var letterCombinations = function(digits) {
  function backtrack(index) {
    if (temp.length === digits.length) {
      results.push(temp.join(''));
      return;
    }

    const digit = dict[digits[index]];

    for (let i = 0; i < digit.length; i += 1) {
      temp.push(digit[i]);
      backtrack(index + 1);
      temp.pop();
    }
  }

  if (digits.length === 0) return [];

  const dict = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  };

  const temp = [];
  const results = [];
  const firstDigit = digits[0];

  for (let i = 0; i < dict[firstDigit].length; i += 1) {
    temp.push(dict[firstDigit][i]);
    backtrack(1);
    temp.pop();
  }

  return results;
};

console.log(letterCombinations('23'));
console.log(letterCombinations('234'));

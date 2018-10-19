var countNumbersWithUniqueDigits = function(n) {
  function backtrack(num, index, arr) {
    if (arr.length === num) {
      result += 1;
      return;
    }

    for (let i = 0; i <= 9; i += 1) {
      if (i === 0 && index === 0 && num !== 1) continue;
      if (arr.indexOf(i) !== -1) continue;

      arr.push(i);
      backtrack(num, index + 1, arr);
      arr.pop(i);
    }
  }

  if (n === 0) return 1;

  let result = 0;

  for (let i = 1; i <= n; i += 1) {
    const arr = [];
    backtrack(i, 0, arr);
  }

  return result;
};

console.log(countNumbersWithUniqueDigits(8));

function isValidParens(temp) {
  let count = 0;

  for (let i = 0; i < temp.length; i += 1) {
    const p = temp[i];

    if (p === '(') count += 1
    if (p === ')') count -= 1
    if (count < 0) return false;
  }

  return count === 0;
}

function generateParenthesisHelper(n, temp, results) {
  const options = ['(',')'];

  for (let i = 0; i < options.length; i += 1) {
    temp.push(options[i]);

    if (temp.length === n * 2) {
      if (isValidParens(temp)) {
        results.push(temp.slice().join(''));
      }
    } else {
      generateParenthesisHelper(n, temp, results);
    }

    temp.pop();
  }
}

var generateParenthesis = function(n) {
  if (n === 0) return ['']

  const temp = ['('];
  const results = [];

  generateParenthesisHelper(n, temp, results);

  return results;
};

console.log(generateParenthesis(3));

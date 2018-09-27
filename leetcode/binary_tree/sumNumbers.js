var sumNumbers = function(root) {
  function sumNumbersHelper(root) {
    if (root === null) return true;

    stack.push(root.val)

    const left = sumNumbersHelper(root.left);
    const right = sumNumbersHelper(root.right);

    if (left && right) sum += Number(stack.join(''));

    stack.pop()

    return false;
  }

  let sum = 0;
  const stack = [];
  sumNumbersHelper(root)

  return sum;
};

var sumNumbers = function(root) {
  function sumNumbersHelper(root, stack) {
    if (root === null) return true;

    stack.push(root.val)

    const left = sumNumbersHelper(root.left, stack);
    const right = sumNumbersHelper(root.right, stack);

    if (left && right) sum += Number(stack.join(''));

    stack.pop()

    return false;
  }

  let sum = 0;
  const stack = [];
  sumNumbersHelper(root, stack, sum)

  return sum;
};

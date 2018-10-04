function helper(root, stack) {
  if (root === null) return true;

  const val = root.val;

  const left = helper(root.left, stack);
  if (val > stack[stack.length - 1]) {
    stack.push(val);
  } else {
    return false;
  }
  const right = helper(root.right, stack);

  return left && right;
}

var isValidBST = function(root) {
  const stack = [-Infinity];

  return helper(root, stack);
};

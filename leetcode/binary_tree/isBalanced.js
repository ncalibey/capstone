var maxDepth = function(root) {
  if (root === null) return 0;

  const left = root.left;
  const right = root.right;
  const left_result = maxDepth(left) + 1
  const right_result = maxDepth(right) + 1

  return Math.max(left_result, right_result);
};

var isBalanced = function(root) {
  if (root === null) return true;

  const left = root.left;
  const right = root.right;

  const left_d = maxDepth(left);
  const right_d = maxDepth(right);

  if (Math.abs(right_d - left_d) <= 1) return isBalanced(left) && isBalanced(right);

  return false;
};

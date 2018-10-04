var maxDepth = function(root) {
  if (root === null) return 0;

  const left = root.left;
  const right = root.right;
  const left_result = maxDepth(left) + 1
  const right_result = maxDepth(right) + 1

  return Math.max(left_result, right_result);
};

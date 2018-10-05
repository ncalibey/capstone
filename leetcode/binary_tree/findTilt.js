var findTilt = function(root) {
  function postOrder(root) {
    if (root === null) return 0;

    const left = root.left;
    const right = root.right;
    const leftResult = postOrder(left);
    const rightResult = postOrder(right);

    sum += Math.abs(leftResult - rightResult);

    return root.val + leftResult + rightResult;
  }

  let sum = 0;

  postOrder(root);

  return sum;
};

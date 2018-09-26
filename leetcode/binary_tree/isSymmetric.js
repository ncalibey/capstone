function buildInOrder(root, stack = []) {
  if (root === null) return;

  buildInOrder(root.left, stack);
  stack.push(root.val);
  buildInOrder(root.right, stack);
}

function isInOrder(stack) {
  let j = stack.length - 1;
  let i = 0;

  while (i < j) {
    if (stack[i] !== stack[j]) {
      return false;
    }

    i += 1;
    j -= 1;
  }

  return true;
}

function buildPreOrder(root, stack) {
  if (root === null) return;

  stack.push(root.val);
  buildPreOrder(root.left, stack);
  buildPreOrder(root.right, stack);
}

function buildPostOrder(root, stack) {
  if (root === null) return;

  buildPostOrder(root.left, stack);
  buildPostOrder(root.right, stack);
  stack.push(root.val);
}

function isPostAndPreSymmetrical(pre, post) {
  let j = post.length - 1;

  for (let i = 0; i < pre.length; i += 1) {
    if (pre[i] !== post[j]) {
      return false;
    }

    j -= 1;
  }

  return true;
}

var isSymmetric = function(root) {
  const inOrderArr = [];
  const preOrderArr = [];
  const postOrderArr = [];

  buildInOrder(root, inOrderArr)
  if (!isInOrder(inOrderArr)) return false;

  buildPreOrder(root, preOrderArr);
  buildPostOrder(root, postOrderArr);

  return isPostAndPreSymmetrical(preOrderArr, postOrderArr);
};

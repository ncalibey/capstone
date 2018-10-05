function combine(left, right) {
  if (left === '()' && right === '()') {
    return '';
  } else if (left !== '()' && right === '()') {
    return left;
  } else {
    return left + right;
  }
}

function helper(node) {
  if (node === null) return '()';

  let s = [`(${node.val}`];

  const right = helper(node.right);
  const left = helper(node.left);

  let lowerLevel = combine(left, right);

  s.push(lowerLevel);
  s.push(')');

  s = s.join('');

  return s;
}

var tree2str = function(t) {
  let s = helper(t);

  return s.slice(1, -1);
};

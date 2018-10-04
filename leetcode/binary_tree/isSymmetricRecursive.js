function isSymHelp(t1, t2) {
  if (t1 === null && t2 === null) return true;
  if (t1 === null || t2 === null) return false;

  return t1.val === t2.val            &&
         isSymHelp(t1.left, t2.right) &&
         isSymHelp(t1.right, t2.left);
}

var isSymmetric = function(root) {
  return isSymHelp(root, root);
};

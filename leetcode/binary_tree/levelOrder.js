var levelOrder = function(root) {
  let parents = [root];
  const results = [];

  while parents.length > 0 {
    let children = [];

    while parents.length > 0 {
      let parent = parents.shift();

      results.push(parent.val);

      if (parent.left) children.push(parent.left);
      if (parent.right) children.push(parent.right);
    }

    parents = children;
  }

  return results;
};

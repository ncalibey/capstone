var averageOfLevels = function(root) {
  const results = [];
  let parents = [root];

  while (parents.length > 0) {
    const len = parents.length;
    const sum = parents.map(p => p.val).reduce((a, b) => a + b);
    let children = [];

    results.push(sum / len);

    while (parents.length > 0) {
      const parent = parents.shift();

      if (parent.left) children.push(parent.left);
      if (parent.right) children.push(parent.right);
    }

    parents = children;
  }

  return results;
};

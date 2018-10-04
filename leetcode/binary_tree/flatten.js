function preOrder(root, queue) {
  if (root === null) return;

  queue.push(root);

  preOrder(root.left, queue)
  preOrder(root.right, queue)
}

function getQueueLength(queue) {
  let l = 0;

  for (let i = 0; ; i += 1) {
    if (queue[i]) {
      l += 1;
    } else {
      break;
    }
  }

  return l;
}

function reLink(queue) {
  let l = getQueueLength(queue)
  let a = queue.shift();

  while (l > 0) {
    b = queue.shift();
    a.right = b;
    a.left = null;
    a = b;

    l -= 1;
  }
}

var flatten = function(root) {
  const queue = []

  preOrder(root, queue)
  reLink(queue);

  return root;
};

var uniquePaths = function(col, row) {
  const cache = {};

  for (let r = 1; r <= row; r += 1) {
    for (let c = 1; c <= col; c += 1) {
      if (r === 1 || c === 1) {
        cache[`${r},${c}`] = 1;
      } else {
        cache[`${r},${c}`] = cache[`${r - 1},${c}`] + cache[`${r},${c - 1}`];
      }
    }
  }

  return cache[`${row},${col}`];
};

console.log(uniquePaths(7, 3));
console.log(uniquePaths(3, 2));

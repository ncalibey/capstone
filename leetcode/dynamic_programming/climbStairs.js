// Top down
function climbStairsHelper(n, cache={}) {
  if (n == 1 || n == 0) return 1;

  if (cache[n]) {
    return cache[n];
  } else {
    return cache[n] = (cache[n-1] || climbStairs(n-1, cache)) + (cache[n-2] || climbStairs(n-2, cache));
  }
}

var climbStairs = function(n) {
  return climbStairsHelper(n, {});
}

// Bottom up
function climbStairs(n) {
  const cache = {};

  cache[0] = 1;
  cache[1] = 1;
  cache[2] = 2;

  for (let i = 3; i <= n; i += 1) {
    cache[i] = cache[i - 1] + cache[i - 2];
  }

  return cache[n];
}

console.log(climbStairs(0));
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));

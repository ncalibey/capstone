// Top down
// function climbStairsHelper(n, cache={}) {
//   if (n == 1 || n == 0) return 1;
//
//   if (cache[n]) {
//     return cache[n];
//   } else {
//     return cache[n] = (cache[n-1] || climbStairs(n-1, cache)) + (cache[n-2] || climbStairs(n-2, cache));
//   }
// }
//
// var climbStairs = function(n) {
//   return climbStairsHelper(n, {});
// }

// Bottom up
function climbStairs(n) {
  if (n < 2) return 1;
  if (n == 2) return 2;

  let a = 1;
  let b = 2;

  for (let i = 3; i <= n; i += 1) {
    let temp = a + b;
    a = b
    b = temp
  }

  return b;
}

console.log(climbStairs(0));
console.log(climbStairs(1));
console.log(climbStairs(2));
console.log(climbStairs(3));
console.log(climbStairs(4));

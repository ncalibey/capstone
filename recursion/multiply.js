function multiply(a, b) {
  if (b === 0) return 0;
  if (b === 1) return a;

  return a + multiply(a, b - 1)
}

console.log(multiply(5, 2));
console.log(multiply(8, 4));
console.log(multiply(50, 1));
console.log(multiply(50, 0));

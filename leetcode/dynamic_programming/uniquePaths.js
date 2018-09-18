// Top Down
function uniquePathsHelper(col, row, cache={}) {
  if (col === 0 || row === 0) return 0;
  if (col === 1 && row === 1) return 1;

  let prevCol;
  let prevRow;

  if (cache[`${[col - 1, row]}`]) {
    prevCol = cache[`${[col - 1, row]}`];
  } else {
    prevCol = uniquePathsHelper(col - 1, row, cache);
  }

  if (cache[`${[col, row-1]}`]) {
    prevRow = cache[`${[col, row-1]}`];
  } else {
    prevRow = uniquePathsHelper(col, row - 1, cache);
  }

  const result = prevCol + prevRow;
  cache[col, row] = result;

  return result;
}

var uniquePaths = function(col, row) {
  return uniquePathsHelper(col, row, {})
};

console.log(uniquePaths(7, 3));
console.log(uniquePaths(3, 2));

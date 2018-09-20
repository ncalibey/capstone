var minimumTotal = function (triangle) {
  const cache = {};
  let lastRow = triangle.length - 1;
  let minVal = Infinity;

  cache[[0,0]] = triangle[0][0]

  for (let row = 1; row <= lastRow; row += 1) {
    const lastColumn = triangle[row].length - 1;

    for (let col = 0; col <= lastColumn; col += 1) {
      let val = triangle[row][col];

      if (col === 0) {
        cache[[row, col]] = val + cache[[row - 1, col]];
      } else if (col === lastColumn) {
        cache[[row, col]] =  val + cache[[row - 1, col - 1]];
      } else {
        cache[[row, col]] = val + Math.min(cache[[row - 1, col]], cache[[row - 1, col - 1]]);
      }

      if (row === lastRow) minVal = Math.min(minVal, cache[[row, col]]);
    }
  }

  return minVal === Infinity ? cache[[0,0]] : minVal;
};

console.log(minimumTotal([
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
]));

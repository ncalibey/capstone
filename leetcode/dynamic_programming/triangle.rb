def minimum_total_helper(triangle, row=0, col=0, cache={})
  return triangle[row][col] if row == triangle.length - 1

  val = triangle[row][col]
  left = cache[[row + 1, col]] || minimum_total_helper(triangle, row + 1, col)
  right = cache[[row + 1, col + 1]] ||
          minimum_total_helper(triangle, row + 1, col + 1)

  cache[[row, col]] = val + ([left, right].min)
end

def minimum_total(triangle)
  minimum_total_helper(triangle, 0, 0, {})
end

p minimum_total([
     [2],
    [3,4],
   [6,5,7],
  [4,1,8,3]
])

p minimum_total([
     [2],
    [3,1],
   [6,55,7],
  [3,4,18,3]
])

p minimum_total([
     [2],
    [3,1],
   [6,5,7],
  [3,4,1,3]
])

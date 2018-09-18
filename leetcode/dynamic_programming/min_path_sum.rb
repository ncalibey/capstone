def min_path_sum_helper(grid, row, col, cache)
  return grid[row][col] if row === 0 && col === 0
  return nil if col < 0 || row < 0

  val = grid[row][col]

  left = if cache[[row, col - 1]]
           cache[[row, col - 1]]
         else
           min_path_sum_helper(grid, row, col - 1, cache)
         end

  up = if cache[[row - 1, col]]
         cache[[row -1, col]]
       else
         min_path_sum_helper(grid, row - 1, col, cache)
       end

  return val + up if left.nil?
  return val + left if up.nil?

  left += val
  up += val

  cache[[row, col]] = [left, up].min
end

def min_path_sum(grid)
  col = grid[0].length - 1
  row = grid.length - 1
  min_path_sum_helper(grid, row, col, {})
end

p min_path_sum([
  [1,3,1],
  [1,5,1],
  [4,2,1]
  ]) == 7

p min_path_sum([
  [1,4,1],
  [1,1,1],
  [4,2,1]
  ]) == 5

p min_path_sum([
  [1,4],
  [2,3],
  [4,2]
  ]) == 8

p min_path_sum([
  [1,4],
  [2,3],
  ]) == 6

p min_path_sum([
  [1,4,5],
  [2,3,6],
  ]) == 12

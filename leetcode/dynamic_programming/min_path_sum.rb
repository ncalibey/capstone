def min_path_sum_helper(grid, row, col, cache)
  return grid[row][col] if row === 0 && col === 0
  return 0 if col < 0 || row < 0

  val = grid[row][col]
  left = min_path_sum_helper(grid, row, col - 1, cache)
  up = min_path_sum_helper(grid, row - 1, col, cache)

  if left == 0
    return val + up
  elsif up == 0
    return val + left
  end

  left += val
  up += val


  return [left, up].min
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
  ])

p min_path_sum([
  [1,4,1],
  [1,1,1],
  [4,2,1]
  ])

p min_path_sum([
  [1,4],
  [2,3],
  [4,2]
  ])

p min_path_sum([
  [1,4],
  [2,3],
  ])

p min_path_sum([
  [1,4,5],
  [2,3,6],
  ])

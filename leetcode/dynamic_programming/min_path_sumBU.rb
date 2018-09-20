def min_path_sum(grid)
  col = grid[0].length - 1
  c = 0
  row = grid.length - 1
  r = 0
  cache = {}

  cache[[r,c]] = grid[r][c]

  while r <= row

    while c <= col
      if c == 0 && r == 0
        c += 1
        next
      end

      val = grid[r][c]

      if r == 0
        cache[[r,c]] = val + cache[[r, c - 1]]
      elsif c == 0
        cache[[r,c]] = val + cache[[r - 1, c]]
      else
        cache[[r,c]] = val + ([cache[[r, c - 1]], cache[[r - 1, c]]].min)
      end

      c += 1
    end

    r += 1
    c = 0
  end

  cache[[row, col]]
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

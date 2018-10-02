def combine_helper(n, k, curr, temp, results)
  if !temp.include?(curr)
    temp << curr

    if temp.length == k
      results << temp.clone
      temp.pop
    else
      (curr..n).each do |i|
        combine_helper(n, k, i, temp, results)
      end

      temp.pop
    end
  end
end

def combine(n, k)
  temp = []
  results = []

  (1..n).each do |i|
    combine_helper(n, k, i, temp, results)
  end

  results
end

p combine(4, 2)
p ''
p combine(5, 3)

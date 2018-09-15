=begin
2 Readers, 1 Writer

Writer starts at end of nums1, Reader1 starts at m - 1, Reader2 starts at end of
nums 2. If r1 >= r2, then write r1 at writer. If r2 > r1, write r2. Break once
r2 finishes.

=end

def merge(nums1, m, nums2, n)
  return [] if nums1.empty?

  r1 = m - 1
  r2 = n - 1
  writer = nums1.length - 1

  while r2 >= 0
    if r1 < 0 || nums2[r2] > nums1[r1]
      nums1[writer] = nums2[r2]

      r2 -= 1
    else
      nums1[writer] = nums1[r1]

      r1 -= 1
    end

    writer -=1
  end
end

p merge([1,2,3,0,0,0], 3, [2,5,7], 3)
p merge([1,2,4,5,6,0], 5, [3], 1)
p merge([4,5,6,0,0,0], 3, [1,2,3], 3)
p merge([2,0], 1, [1], 1)

def swap(arr, a, b)
  arr[a], arr[b] = arr[b], arr[a]
end

def partition(arr, left, right)
  pivot = right
  pivot_val = arr[pivot]

  right -= 1

  while true

    while arr[left] < pivot_val
      left += 1
    end

    while arr[right] > pivot_val
      right -= 1
    end

    if left >= right
      break
    else
      swap(arr, left, right) if left < right
    end

  end

  swap(arr, left, pivot)

  left
end

def quickselect_helper(arr, k, left=0, right=arr.length - 1)
  return arr[left] if left > right

  pivot = partition(arr, left, right)

  if pivot == k
    return arr[k]
  elsif pivot < k
    return quickselect_helper(arr, k, pivot + 1, right)
  else
    return quickselect_helper(arr, k, left, pivot - 1)
  end
end

def allsame(arr)
  arr.uniq.length == 1
end

def quickselect(arr, k)
  return arr[0] if allsame(arr)
  kth = arr.length - k
  quickselect_helper(arr, kth)
end

p quickselect([3,2,1,5,6,4], 2)
p quickselect([3,2,1,5,6,4], 1)
p quickselect([3,2,3,1,2,4,5,5,6], 4)
p quickselect([3,3,3,3,3,3,3,3,3], 1)
p quickselect([3,1,2,4], 2)

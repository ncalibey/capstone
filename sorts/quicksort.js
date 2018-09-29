function swap(array, a, b) {
  [array[a], array[b]] = [array[b], array[a]];
}

function partition(array, left, right) {
  let pivot = right + 1;
  let pivotVal = array[pivot];

  while (left < right) {
    while (array[left] < pivotVal) left += 1;
    while (array[right] > pivotVal) right -= 1;

    if (left < right) swap(array, left, right);
  }

  swap(array, left, pivot);

  return left;
}

function quicksort(array, left = 0, right = array.length - 2) {
  if (left > right) return;

  let pivot = partition(array, left, right);

  quicksort(array, left, pivot - 2)
  quicksort(array, pivot + 1, right);

  return array;
}

console.log(quicksort([0,5,2,1,6,3]))
console.log(quicksort([7,1,0,3]))
console.log(quicksort([7,1,0,3,3]))

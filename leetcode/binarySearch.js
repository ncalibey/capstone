function binarySearch(array, val) {
  let lowerBound = 0;
  let upperBound = array.length - 1;

  while (lowerBound <= upperBound) {
    let midpoint = Math.floor((upperBound + lowerBound) / 2);
    const midpointValue = array[midpoint];

    if (midpointValue < val) {
      lowerBound = midpoint + 1;
    } else if (midpointValue > val) {
      upperBound = midpoint - 1;
    } else if (midpointValue === val) {
      return midpoint;
    }
  }

  return -1;
}


console.log(binarySearch([1, 2, 3, 4, 5], 2))
console.log(binarySearch([1, 2, 3, 4, 5], 4))
console.log(binarySearch([1, 2, 3, 4, 5], 6))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 7))
console.log(binarySearch([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15], 1))

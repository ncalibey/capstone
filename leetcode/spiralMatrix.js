function updateTracker(tracker, direction) {
  switch(direction) {
    case 'r':
      tracker[1] += 1;
      break;
    case 'l':
      tracker[1] -= 1;
      break;
    case 'u':
      tracker[0] -= 1;
      break;
    case 'd':
      tracker[0] += 1;
  }
}

function changeDirection(direction) {
  const NEXT_DIRECTIONS = {
    r: 'd',
    d: 'l',
    l: 'u',
    u: 'r'
  };

  return NEXT_DIRECTIONS[direction]
}

function isNewDirection(tracker, matrix, direction) {
  const tkr = tracker.slice();
  updateTracker(tkr, direction)

  return matrix[tkr[0]] === undefined || matrix[tkr[0]][tkr[1]] === undefined;
}

var spiralOrder = function(matrix) {
  const mtx = matrix.slice();
  const tracker = [0, 0];
  const spiralArr = [];
  let currentDirection = 'r';

  if (matrix.length === 0) return [];

  while(true) {
    if (spiralArr.length === (mtx[0].length * mtx.length)) break;

    spiralArr.push(mtx[tracker[0]][tracker[1]]);
    mtx[tracker[0]][tracker[1]] = undefined;

    if (isNewDirection(tracker, mtx, currentDirection)) {
      currentDirection = changeDirection(currentDirection);
      updateTracker(tracker, currentDirection);
    } else {
      updateTracker(tracker, currentDirection);
    }
  }

  return spiralArr;
};

const m1 = [
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
];

const m2 = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]

const m3 = [
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ],
  [ 'a', 'b', 'c' ],
  [ 'e', 'f', 'g' ]
]

const m4 = [
  [ 1, 2, 3, 'h' ],
  [ 4, 5, 6, 'i' ],
  [ 7, 8, 9, 'j' ],
  [ 'a', 'b', 'c', 'k' ],
  [ 'e', 'f', 'g', 'l' ]
]

console.log(spiralOrder(m1));
console.log('');
console.log(spiralOrder(m2));
console.log('');
console.log(spiralOrder(m3));
console.log('');
console.log(spiralOrder(m4));

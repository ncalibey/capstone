/*
Spiral Matrix

- m: rows, n: elements
- starts at [0][0], goes all the way left, then down, then to [arr l - 1][iarr - 1], then stops
  at [1, iarr - 1]
- how does it look for even number of rows? are rows always odd? is it always 3?
- are the elements always numbers?
- create a current position marker that locates where you are
  - this changes upon current direction (right, down, left, or up)
  - changes if either next element is `undefined` or `null`

  Input: Nested array
  Output: single level array

  [
    [ 1, 2, 3 ]
    [ 4, 5, 6 ]
    [ 7, 8, 9 ]
    [ a, b, c ]
    [ e, f, g ]
  ]

  [1, 2, 3, 6, 9, c, g, f, e, a, 7, 4, 5, 8, b]

  [
    [ 1, 2, 3, h ]
    [ 4, 5, 6, i ]
    [ 7, 8, 9, j ]
    [ a, b, c, k ]
    [ e, f, g, l ]
  ]

  [1, 2, 3, h, i, j, k, l, g, f, e, a, 7, 4, 5, 6, 9, c, b, 8]

Algorithm:
  a) have a tracker that is an array [0, 0] for vertical, horizontal
  b) have a direction tracker that is a hash table that returns the next direction
     and a variable that holds the current direction
  c) if return_arr length === m * n, then return
  d) add current character and set cell to `undefined`
  e) check next character
     - clone the array, then increment to check next cell
     - if it's undefined, return false
       - change direction, then go back to c
     - if it's a number, return true
       - go back to c
*/
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

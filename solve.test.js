const _ = require('underscore');
const { pyramidDescentSolver } = require('./solution.js');

test('solver outputs the correct path for a pyramid with 2 rows', () => {
  const pyramid = [[1], [2, 3], [4, 1, 1]]
  expect(_.isEqual(pyramidDescentSolver(2, pyramid), ['L', 'R'])).toBe(true);
  expect(_.isEqual(pyramidDescentSolver(8, pyramid), ['L', 'L'])).toBe(true);
  expect(_.isEqual(pyramidDescentSolver(3, pyramid), ['R', 'L'])).toBe(true);
});

test('solver outputs the correct path for a pyramid with 5 rows', () => {
  const pyramid = [[2], [4, 3], [3, 2, 6], [2, 9, 5, 2], [10, 5, 2, 15, 5]];
  expect(_.isEqual(pyramidDescentSolver(720, pyramid), ['L', 'R', 'L', 'L'])).toBe(true);
  expect(pyramidDescentSolver(320, pyramid)).toBeFalsy();
});
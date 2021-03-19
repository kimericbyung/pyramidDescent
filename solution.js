function pyramidDescentSolver(target, pyramid, product, path, left, right) {
  // if pyramid.length !== 0, the path has not reached the last row of the pyramid
  if (product === target && pyramid.length === 0) {
    return path;
  }
  if (pyramid[0]) {
    // first row, make sure that nothing is added to the path during the first recursive call
    if (pyramid[0].length === 1) {
      return pyramidDescentSolver(target, pyramid.slice(1), pyramid[0], [], 0, 1);
    } else {
      let pathSolu;
      // go left
      pathSolu = pyramidDescentSolver(target, pyramid.slice(1), product * pyramid[0][left], [...path, 'L'], left, right);
      if (pathSolu) {
        return pathSolu
      }
      // go right
      pathSolu = pyramidDescentSolver(target, pyramid.slice(1), product * pyramid[0][right], [...path, 'R'], left + 1, right + 1);
      if (pathSolu) {
        return pathSolu
      }
    }
  }
};

module.exports = { pyramidDescentSolver }
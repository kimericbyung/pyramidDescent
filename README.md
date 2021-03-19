To run the tests for this solver, make sure to install all the dependencies with `npm install`
and then run the script `npm test`.

The solution for this particular puzzle uses a recursive approach that checks every possible
route and escapes/returns the path when the product of the particular path is equal to the
target.

---------------------------------   THE SOLUTION -----------------------------------------

As stated before, the solution takes a recursive approach that checks every possible route
After some analysis with the amount of levels and the maximum amount of routes that needed
to be checked, it was found that routes (r) correlated with levels (n) by `r = 2(n - 1)`.
In terms of time complexity, this doesn't seem too bad.

So how does the solution do it?

The base case, namely lines 3-5 of `solution.js` returns the aggregate path if there are
no more levels in the current pyramid && the running product is === to the target.  The
condition for no more levels exists so that it is ensured that the path has reached the
bottom of the pyramid.  If this condition does not exist, then a product that matches the
target can be found and the function would escape prematurely without reaching the bottom.

The secondary case, namely line 6, makes sure that the bottom has not been met.  If the
bottom has been met but the target has not been reached, nothing is returned and so
the algorithm moves on to next cases as seen by lines 14-16 and 19-21.

One edge case that does not follow the pattern of the levels (from n = 2 -> n = pyramid.length)
is the first level.  During the first level, no "path" is taken.  The first level is where
the algorithm starts so `L` or `R` are not added to the "path".  This edge case is handled by
lines 8-10.

To explain the recursive call, I will use the left path traversal as an example.

```js
pathSolu = pyramidDescentSolver(target, pyramid.slice(1), product * pyramid[0][left], [...path, 'L'], left, right);
if (pathSolu) {
  return pathSolu
}
```

The target parameter remains the same, however different variables are then passed into the
recursive call to keep a running state of the particular path.  Pyramid.slice(1) is called
to pass in a copy of the pyramid as well as pass in a pyramid with one less floor from the top.
A copy must be passed because if the actual pyramid is mutated, then the right travesal will fail.

The product is initiated in the edge case and is multiplied by the "left" number of the current floor.
The "left" variable will always stay the same when traversing left.  The same can be said about the
"right" variable.  The only different between going "left" and going "right" is that when going right,
the "left" and "right" variables are increased by 1.
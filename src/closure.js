// Completed everything except for stretch. Will come back to later!

// Complete the following functions.

const counter = () => {
  let count = 0;
  return () => {
    count++;
    return count;
  };
};

const counterFactory = () => {
  let count = 0;
  return {
    increment: () => ++count,
    decrement: () => --count,
  };
};

const limitFunctionCallCount = (cb, n) => {
  let count = 0;
  return (...args) => {
    if (n === count) {
      return null;
    }
    count++;
    return cb(...args);
  };
};

/* STRETCH PROBLEM */

const cacheFunction = (cb) => {
  // Should return a funciton that invokes `cb`.
  // A cache (object) should be kept in closure scope.
  // The cache should keep track of all arguments have been used to invoke this function.
  // If the returned function is invoked with arguments that it has already seen
  // then it should return the cached result and not invoke `cb` again.
  // `cb` should only ever be invoked once for a given set of arguments.

  // TODO: Come back to if sanity intact.
};

/* eslint-enable no-unused-vars */

module.exports = {
  counter,
  counterFactory,
  cacheFunction,
  limitFunctionCallCount,
};

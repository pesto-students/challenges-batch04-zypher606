function curry(fn) {
  return function inner(...args) {
    if (args.length >= fn.length) {
      return fn(...args);
      // return fn.apply(this, args);
    }

    return (...args2) => (
      inner(...[...args, ...args2])
      // inner(...args.concat(args2))
      // inner.apply(this, args.concat(args2))
    );
  };
}

export {
  curry,
};

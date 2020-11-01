function curry(fxn) {
  return function curryHandle(...args1) {
    if (args1.length >= fxn.length) {
      return fxn(...args1);
    }

    return (...args2) => curryHandle.apply(this, [...args1, ...args2]);
  };
}

export {
  curry,
};

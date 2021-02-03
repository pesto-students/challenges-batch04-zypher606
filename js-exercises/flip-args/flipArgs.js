function flipArgs(fxn) {
  return (...args) => {
    args.reverse();
    return fxn(...args);
  };
}

export {
  flipArgs,
};

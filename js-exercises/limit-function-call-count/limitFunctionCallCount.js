const limitFunctionCallCount = (fxn, limit) => (...args) => {
  if (limit === 0) return null;

  // eslint-disable-next-line no-param-reassign
  limit -= 1;
  return fxn(...args);
};

export {
  limitFunctionCallCount,
};

const map = (obj, fxn) => Object.fromEntries(
  Object.entries(obj).map(fxn),
);

const filter = (obj, fxn) => Object.fromEntries(
  Object.entries(obj).filter(fxn),
);

const invert = (obj) => Object.fromEntries(
  Object.entries(obj).map(([key, value]) => [value, key]),
);

const merge = (...args) => {
  let result = {};

  for (const obj of args) {
    result = { ...result, ...obj };
  }
  return result;
};

const all = (obj, fxn) => {
  const result = filter(obj, fxn);
  return Object.keys(obj).length === Object.keys(result).length;
};

const some = (obj, fxn) => {
  const result = filter(obj, fxn);
  return Object.keys(result).length > 0;
};

export {
  map,
  filter,
  invert,
  merge,
  all,
  some,
};

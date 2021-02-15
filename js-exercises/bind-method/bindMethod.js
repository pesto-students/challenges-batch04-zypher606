function bind(fn, obj) {
  return (...args) => fn.call(obj, ...args);
}

module.exports = { bind };

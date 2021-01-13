function rangeIter(lb, ub) {
  if (lb === undefined || ub === undefined) {
    throw new TypeError('undefined is not a number');
  }

  if (typeof (lb) !== 'number') throw new TypeError(`${lb} is not a number`);
  if (typeof (ub) !== 'number') throw new TypeError(`${ub} is not a number`);

  const range = {
    from: lb,
    to: ub,
    * [Symbol.iterator]() {
      let current = lb;

      while (current <= ub) {
        // eslint-disable-next-line no-plusplus
        yield current++;
      }
    },
  };

  return range;
}

export { rangeIter };

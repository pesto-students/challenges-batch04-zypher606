function accessorProperties() {
  return {
    _number: null,
    set number(value) {
      if (typeof value !== 'number') {
        throw new Error(`Expected number got ${typeof value}`);
      }
      // eslint-disable-next-line no-underscore-dangle
      this._number = Number(parseInt(value, 10).toString(2));
    },

    get number() {
      // eslint-disable-next-line no-underscore-dangle
      return this._number;
    },
  };
}

export {
  accessorProperties,
};

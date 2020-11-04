function accessorProperties() {
  return {
    set number(value) {
      if (typeof value !== 'number') throw Error('Incorrect type');
      /* eslint-disable no-underscore-dangle */
      // eslint-disable-next-line no-bitwise
      this._number = ((value >>> 0).toString(2));
    },

    get number() {
      // eslint-disable-next-line radix
      return parseInt(this._number) ? parseInt(this._number) : undefined;
    },
  };
}

export {
  accessorProperties,
};

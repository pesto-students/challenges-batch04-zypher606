function flipArgs(callback) {
  return (...args) => {
    callback(...args.reverse());
  };
}

// eslint-disable-next-line func-names
const flipped = flipArgs(function () {
  // eslint-disable-next-line prefer-rest-params
  console.log(arguments);
});

flipped('a', 'b', 'c', 'd');
// => ['d', 'c', 'b', 'a']

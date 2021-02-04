const sumEvenArgs = (...args) => args.filter(item => item % 2 === 0)
  .reduce((a, b) => a + b, 0);

export { sumEvenArgs };

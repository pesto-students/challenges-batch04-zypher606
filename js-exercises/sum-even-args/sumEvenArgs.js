const sumEvenArgs = (...args) => {
  const evenItems = args.filter(item => item % 2 === 0);
  return evenItems.reduce((a, b) => a + b, 0);
};

export { sumEvenArgs };

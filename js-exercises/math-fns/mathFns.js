// You can use the function from the `Math` module.
const sqrt = (n) => n ** 0.5;

const power = (x, y) => x ** y;

const round = (n) => {
  // eslint-disable-next-line radix
  const integerForm = parseInt(n);
  const decimalPart = n % integerForm;

  if (decimalPart >= 0.5) return integerForm + 1;

  return integerForm;
};
// Don't change the exported names.
export {
  sqrt,
  power,
  round,
};

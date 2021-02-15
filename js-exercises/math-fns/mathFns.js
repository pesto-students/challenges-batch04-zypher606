// You can't use the function from the `Math` module.
function sqrt(num) {
  return num ** 0.5;
}

function power(num, exp) {
  return num ** exp;
}

function round(num) {
  const integer = parseInt(num, 10);
  const decimal = num - integer;
  if (decimal >= 0.5) return integer + 1;
  return integer;
}

// Don't change the exported names.
export {
  sqrt,
  power,
  round,
};

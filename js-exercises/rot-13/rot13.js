function rotN(str, offset) {
  const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const result = [...str];
  for (let i = 0; i < result.length; i += 1) {
    let index = letters.indexOf(result[i]);
    if (index !== -1 && index !== undefined) {
      index += offset;
      result[i] = letters[index % letters.length];
    }
  }
  return result.join('');
}

function rot13(str) {
  return rotN(str, 13);
}

export {
  rot13,
};

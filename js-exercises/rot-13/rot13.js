function rot13(...args) {
  const alphabets = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const cypheredMap = {};

  for (const char of alphabets) {
    cypheredMap[char] = alphabets[(alphabets.indexOf(char) + 13) % 26];
  }

  const input = [...args[0]];
  for (let i = 0; i < input.length; i += 1) {
    if (cypheredMap[input[i]]) {
      input[i] = cypheredMap[input[i]];
    }
  }
  return input.join('');
}

export {
  rot13,
};

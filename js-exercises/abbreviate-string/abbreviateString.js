function abbreviateString(str) {
  if (typeof str !== 'string') throw Error('invalid parameters');

  const words = str.split(' ');
  return `${words[0]} ${words[words.length - 1][0].toLocaleUpperCase()}.`;
}

export { abbreviateString };

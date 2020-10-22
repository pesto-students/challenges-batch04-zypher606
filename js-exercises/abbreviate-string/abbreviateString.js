function abbreviateString(str) {
  const splittedString = str.split(' ');
  const result = [];
  result.push(splittedString[0]);

  if (splittedString.length > 1) {
    result.push(`${splittedString[splittedString.length - 1][0]}.`.toUpperCase());
  }

  return result.join(' ');
}

export { abbreviateString };

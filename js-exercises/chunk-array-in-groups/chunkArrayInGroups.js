function chunkArrayInGroups(array, chunkSize) {
  const result = [];
  let index = 0;
  while (index < array.length) {
    const first = array.slice(index, index + chunkSize);
    result.push(first);
    index += chunkSize;
  }
  return result;
}

export {
  chunkArrayInGroups,
};

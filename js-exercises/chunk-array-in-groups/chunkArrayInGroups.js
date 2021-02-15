function chunkArrayInGroups(array, chunkSize) {
  let index = 0;
  const chunk = [];
  while (index < array.length) {
    chunk.push(array.slice(index, index + chunkSize));
    index += chunkSize;
  }
  return chunk;
}

export {
  chunkArrayInGroups,
};

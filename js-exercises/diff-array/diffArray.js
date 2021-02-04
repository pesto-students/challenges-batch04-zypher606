function diffArray(arr1, arr2) {
  const filter1 = arr1.filter(item => arr2.includes(item) === false);
  const filter2 = arr2.filter(item => arr1.includes(item) === false);
  return [...filter1, ...filter2];
}

export {
  diffArray,
};

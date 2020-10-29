function diffArray(array1, array2) {
  const frequencyMap = {};
  for (const item of array1) {
    frequencyMap[item] = 1;
  }

  for (const item of array2) {
    if (frequencyMap[item]) frequencyMap[item] += 1;
    else frequencyMap[item] = 1;
  }

  const uniqueItems = [...array1, ...array2].filter(item => frequencyMap[item] === 1);
  return uniqueItems;
}

export {
  diffArray,
};

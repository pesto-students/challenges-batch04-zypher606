const deepCopyObject = (objToCopy) => {
  if (typeof objToCopy !== 'object' || objToCopy === null) return objToCopy;

  const result = {};
  for (const key in objToCopy) {
    if (typeof objToCopy[key] === 'object') {
      result[key] = deepCopyObject(objToCopy[key]);
    } else {
      result[key] = objToCopy[key];
    }
  }
  return result;
};

export { deepCopyObject };

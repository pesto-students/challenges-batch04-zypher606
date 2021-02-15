function removeFalsyValues(array) {
  return array.filter(item => {
    if (item) return true;
    return false;
  });
}

export {
  removeFalsyValues,
};

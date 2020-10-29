function removeFalsyValues(array) {
  return array.filter(item => {
    if (!item) return false;
    return true;
  });
}

export {
  removeFalsyValues,
};

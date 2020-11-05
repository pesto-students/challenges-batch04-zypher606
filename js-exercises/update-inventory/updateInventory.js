function updateInventory(arr1, arr2) {
  const inventory = Object.fromEntries(arr1.map(([key, value]) => [value, key]));

  arr2.forEach(([key, value]) => {
    if (inventory[value]) inventory[value] += key;
    else inventory[value] = key;
  });

  const result = Object.entries(inventory).map(([key, value]) => [value, key]);
  result.sort(([, v1], [, v2]) => v1.localeCompare(v2));
  return result;
}

export {
  updateInventory,
};

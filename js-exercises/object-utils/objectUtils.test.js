import {
  map, filter, invert, merge, all, some,
} from './objectUtils';

describe('Object Utils Test', () => {
  test('Test 1 - Map', () => {
    const obj = {
      para_1: 3,
      para_2: 10,
    };
    const result = map(obj, ([key, val]) => [key.toUpperCase(), val * 10]);

    expect(JSON.stringify(result)).toBe(JSON.stringify({ PARA_1: 30, PARA_2: 100 }));
  });

  test('Test 2 - Object Filter', () => {
    const obj = {
      para_1: 3,
      para_2: 10,
    };

    const result = filter(obj, ([key]) => key === 'para_1');
    expect(JSON.stringify(result)).toBe(JSON.stringify({ para_1: 3 }));
  });

  test('Test 3 - Invert key value pair', () => {
    const obj = {
      key_1: 'value_1',
      key_2: 'value_2',
    };

    const result = invert(obj);
    expect(JSON.stringify(result)).toBe(JSON.stringify({ value_1: 'key_1', value_2: 'key_2' }));
  });

  test('Test 4 - Merge objects', () => {
    const obj1 = { key_1: 'value_1' };
    const obj2 = { key_2: 'value_2' };

    const result = merge(obj1, obj2);
    expect(JSON.stringify(result)).toBe(JSON.stringify({ key_1: 'value_1', key_2: 'value_2' }));
  });

  test('Test 5 - All', () => {
    const obj = {
      para_1: 3,
      para_2: 10,
    };
    const result1 = all(obj, ([, val]) => val < 40);
    const result2 = all(obj, ([, val]) => val > 5);

    expect(result1).toBe(true);
    expect(result2).toBe(false);
  });

  test('Test 6 - Some', () => {
    const obj = {
      para_1: 3,
      para_2: 10,
    };
    const result1 = some(obj, ([, val]) => val < 40);
    const result2 = some(obj, ([, val]) => val > 5);
    const result3 = some(obj, ([, val]) => val === 3);
    const result4 = some(obj, ([, val]) => val === 5);

    expect(result1).toBe(true);
    expect(result2).toBe(true);
    expect(result3).toBe(true);
    expect(result4).toBe(false);
  });
});

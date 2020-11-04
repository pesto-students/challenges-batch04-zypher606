import { accessorProperties } from './accessorProperties';

describe('Accessor properties Test', () => {
  test('Test 1', () => {
    const obj = accessorProperties();
    obj.number = 36;
    expect(obj.number).toBe(100100);
  });

  test('Test 2', () => {
    const obj = accessorProperties();
    expect(obj.number).toBe(undefined);
  });

  // test('Template Test 2', () => {
  //   const obj = accessorProperties();
  //   obj.number = '36';
  //   expect(obj.number).toBe(undefined);
  // });
});

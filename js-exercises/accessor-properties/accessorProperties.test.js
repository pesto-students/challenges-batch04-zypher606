import { accessorProperties } from './accessorProperties';

describe('Template Test', () => {
  test('Template Test', () => {
    const obj = accessorProperties();
    obj.number = 36;
    expect(obj.number).toBe(100100);
  });

  test('Template Test 2', () => {
    const obj = accessorProperties();
    expect(obj.number).toBe(undefined);
  });

  // test('Template Test 2', () => {
  //   const obj = accessorProperties();
  //   obj.number = '36';
  //   expect(obj.number).toBe(undefined);
  // });
});

import { accessorProperties } from "./accessorProperties";

describe('Accessor properties Test', () => {
  test('Test 1', () => {
    const obj = accessorProperties();
    obj.number = 36;
    expect(obj.number).toBe(100100);
  });

  test('Test 2', () => {
    const obj = accessorProperties();
    expect(obj.number).toBe(null);
  });

  test('Test 3', () => {
    const obj = accessorProperties();
    obj.number = 0;
    expect(obj.number).toBe(0);
    obj.number = 1;
    expect(obj.number).toBe(1);
    obj.number = 2;
    expect(obj.number).toBe(10);
    obj.number = 26;
    expect(obj.number).toBe(11010);
    obj.number = 67;
    expect(obj.number).toBe(1000011);
  });
});

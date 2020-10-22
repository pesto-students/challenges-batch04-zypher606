import { sqrt, power, round } from './mathFns';

describe('Use Math functions', () => {
  test('should use the math functions to get correct values', () => {
    expect(sqrt(49)).toBe(7);
    expect(power(2, 4)).toBe(16);
    expect(power(9, 2)).toBe(81);
    expect(round(7.4)).toBe(7);
    expect(round(7.5)).toBe(8);
    expect(round(7.49999)).toBe(7);
    expect(round(7.51)).toBe(8);
  });
});

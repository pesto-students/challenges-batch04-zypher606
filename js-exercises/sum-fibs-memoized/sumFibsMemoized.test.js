import { sumFibs, cacheFunction } from './sumFibsMemoized';

describe('sumFibsMemoized', () => {
  test('should return a number', () => {
    expect(typeof sumFibs(1)).toEqual('number');
  });

  test('should return the corrent number for small input', () => {
    expect(sumFibs(4)).toBe(5);
  });

  test('should return the correct number for large input', () => {
    expect(sumFibs(1000)).toBe(1785);
    expect(sumFibs(4000000)).toBe(4613732);
    expect(sumFibs(75024)).toBe(60696);
  });

  it('should return a function', () => {
    expect(typeof cacheFunction(() => {})).toBe('function');
  });
  it('The cached function should return the correct result', () => {
    const foo = (x) => x;
    const cachedFunction = cacheFunction(foo);
    expect(cachedFunction(10)).toBe(10);
  });
  it('should cache function results and not rerun the original callback if the same arguments are presented', () => {
    const foo = jest.fn();
    const myCachedFunction = cacheFunction(foo);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(true);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    myCachedFunction(10);
    expect(foo).toHaveBeenCalledTimes(2); // Please explain this one in class
  });
});

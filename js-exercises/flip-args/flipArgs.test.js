import { flipArgs } from './flipArgs';

describe('flipArgs problem', () => {
  it('should return a function', () => {
    expect(typeof flipArgs(() => {})).toBe('function');
  });
  test('should reverse the arguments', () => {
    const flipArgsFxn = flipArgs(function () {
      // eslint-disable-next-line prefer-rest-params
      return (Object.values(arguments));
    });
    expect(flipArgsFxn(1, 2, 4)).toEqual([4, 2, 1]);
  });
});

import * as sinon from 'sinon';
import { debounceWithInterval, debounceWithTimeout } from './debounce';
// const _ = require('lodash');

let clock;

beforeEach(() => {
  clock = sinon.useFakeTimers();
});

afterEach(() => {
  clock.restore();
});

describe('debounce', () => {
  test('1. Debounce with set interval', () => {
    const func = jest.fn();
    const debouncedFunc = debounceWithInterval(func, 1000);

    // Call it immediately
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(0); // func not called

    // Call it several times with 500ms between each call
    for (let i = 0; i < 20; i += 1) {
      clock.tick(500);
      debouncedFunc();
    }
    expect(func).toHaveBeenCalledTimes(0); // func not called

    // wait 1000ms
    clock.tick(1000);
    expect(func).toHaveBeenCalledTimes(1); // func called
  });

  test('2. Debounce with set timeout', () => {
    const func = jest.fn();
    const debouncedFunc = debounceWithTimeout(func, 1000);

    // Call it immediately
    debouncedFunc();
    expect(func).toHaveBeenCalledTimes(0); // func not called

    // Call it several times with 500ms between each call
    for (let i = 0; i < 20; i += 1) {
      clock.tick(500);
      debouncedFunc();
    }
    expect(func).toHaveBeenCalledTimes(0); // func not called

    // wait 1000ms
    clock.tick(1000);
    expect(func).toHaveBeenCalledTimes(1); // func called
  });
});

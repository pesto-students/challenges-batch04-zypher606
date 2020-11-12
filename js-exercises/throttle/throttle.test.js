import { throttle } from "./throttle";
import * as sinon from 'sinon';

let clock;

beforeEach(() => {
  clock = sinon.useFakeTimers();
});

afterEach(() => {
  clock.restore();
});

describe('throttle', () => {
  test('Throttle test cases', () => {
    const func = jest.fn();
    const throttleFunc = throttle(func, 1000);

    // Call it immediately
    throttleFunc();
    expect(func).toHaveBeenCalledTimes(1); // func not called

    // Call it several times with 500ms between each call
    for (let i = 0; i < 20; i += 1) {
      clock.tick(500);
      throttleFunc();
    }
    expect(func).toHaveBeenCalledTimes(11); // func not called

    // wait 500ms
    clock.tick(500);
    throttleFunc();
    expect(func).toHaveBeenCalledTimes(11); // func called

    // wait 1500ms
    clock.tick(1500);
    throttleFunc();
    expect(func).toHaveBeenCalledTimes(12); // func called
  });
});
